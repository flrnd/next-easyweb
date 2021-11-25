#!/bin/bash
psql -U $POSTGRES_USER -d backend << EOF
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

grant select on table website.post to website_anonymous, website_user;
grant insert, update, delete on table website.post to website_user;
grant usage on sequence website.post_id_seq to website_user;

grant execute on function website.user_full_name(website.user) to website_anonymous, website_user;
grant execute on function website.authenticate(text, text) to website_anonymous, website_user;
grant execute on function website.current_user() to website_anonymous, website_user;

grant execute on function website.register_user(text, text, text, text) to website_anonymous;
EOF
