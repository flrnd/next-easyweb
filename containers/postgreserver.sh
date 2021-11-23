#!/bin/sh
podman run --pod=$POSTGRES_DB_POD_NAME \
-v $HOME/.local/share/containers/volume:/var/lib/postgresql/data:Z \
-e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
-e POSTGRES_USER=$POSTGRES_USER \
--name database -d postgres \

