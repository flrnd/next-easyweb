#!/bin/sh

if [ -z ${POSTGRES_DB_POD_NAME+x} ] || [ -z ${POSTGRES_PASSWORD+x} ] || [ -z ${POSTGRES_USER+x} ]; then
  printf "%s\n" "export POSTGRES_DB_POD_NAME, POSTGRES_USER, POSTGRES_PASSWORD";
else
  podman run --pod=$POSTGRES_DB_POD_NAME \
    -v $HOME/.local/share/containers/volume:/var/lib/postgresql/data:Z \
    -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    -e POSTGRES_USER=$POSTGRES_USER \
    --name database \
    -d postgres;
fi

