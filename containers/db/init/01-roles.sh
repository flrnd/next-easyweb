#!/bin/bash
psql -U $POSTGRES_USER -d $POSTGRES_DB << EOF
create role $W_ROLE login password '$W_ROLE_PASSWD';

create role user_login;
grant user_login to $W_ROLE;
create role anonymous_login;
grant anonymous_login to $W_ROLE;

-- after schema creation and before function creation
alter default privileges revoke execute on functions from public;

grant usage on schema website to anonymous_login, user_login;

grant select on table website.user to anonymous_login, user_login;
grant update, delete on table website.user to user_login;

grant select on table website.site_config to user_login;
grant insert, update, delete on table website.site_config to user_login;
grant usage on sequence website.site_config_id_seq to user_login;

alter table website.user enable row level security;
alter table website.site_config enable row level security;

create policy select_user on website.user for select
  using (true);

create policy select_site_config on website.site_config for select
  using (true);

create policy update_user on website.user for update to user_login
  using (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy delete_user on website.user for delete to user_login
  using (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy insert_site_config on website.site_config for insert to user_login
  with check (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy update_site_config on website.site_config for update to user_login
  using (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);

create policy delete_site_config on website.site_config for delete to user_login
  using (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);
EOF
