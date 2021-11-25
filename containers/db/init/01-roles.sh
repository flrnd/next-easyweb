#!/bin/bash
psql -U $POSTGRES_USER -d backend << EOF
create role $W_ROLE login password '$W_ROLE_PASSWD';
create role $W_ROLE_USER;
grant $W_ROLE_USER to $W_ROLE;
EOF
