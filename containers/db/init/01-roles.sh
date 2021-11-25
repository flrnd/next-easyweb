#!/bin/bash
psql -U $site_configGRES_USER -d backend << EOF
create role $W_ROLE login password '$W_ROLE_PASSWD';

create role $W_ROLE_USER;
grant $W_ROLE_USER to $W_ROLE;
create role website_anonymous;
grant website_anonymous to $W_ROLE;

-- after schema creation and before function creation
alter default privileges revoke execute on functions from public;

grant usage on schema website to website_anonymous, website_user;

grant select on table website.user to website_anonymous, website_user;
grant update, delete on table website.user to website_user;

grant select on table website.site_config to website_anonymous, website_user;
grant insert, update, delete on table website.site_config to website_user;
grant usage on sequence website.site_config_id_seq to website_user;

grant execute on function website.user_full_name(website.user) to website_anonymous, website_user;
grant execute on function website.authenticate(text, text) to website_anonymous, website_user;
grant execute on function website.current_user() to website_anonymous, website_user;

grant execute on function website.register_user(text, text, text, text) to website_anonymous;

alter table website.user enable row level security;
alter table website.site_config enable row level security;

create policy select_user on website.user for select
  using (true);

create policy select_site_config on website.site_config for select
  using (true);

create policy update_user on website.user for update to website_user
  using (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy delete_user on website.user for delete to website_user
  using (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy insert_site_config on website.site_config for insert to website_user
  with check (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy update_site_config on website.site_config for update to website_user
  using (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy delete_site_config on website.site_config for delete to website_user
  using (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);
EOF
