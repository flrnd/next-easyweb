#!/bin/sh
podman run --pod=postgre-server \
-e 'PGADMIN_DEFAULT_EMAIL=flrnd@duck.com' \
-e PGADMIN_DEFAULT_PASSWORD='thoht9Zo' \
--name pgadmin12 \
-d dpage/pgadmin4 \

