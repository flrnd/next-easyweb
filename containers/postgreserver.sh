#!/bin/sh
podman run --pod=postgre-server \
-v ~/.local/share/containers/volume:/var/lib/postgresql/data:Z \
-e POSTGRES_PASSWORD=Cahkao7i \
-e POSTGRES_USER=dbadm \
--name database -d postgres \

