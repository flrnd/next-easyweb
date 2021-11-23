#!/bin/sh

if [ -z ${PGADMIN_POD_NAME+x} ] || [ -z ${PGADMIN_DEFAULT_EMAIL+x} ] || [ -z ${PGADMIN_DEFAULT_PASSWORD+x} ]; then
  printf "%s\n" "export PGADMIN_PODNAME, PGADMIN_DEFAULT_EMAIL, PGADMIN_DEFAULT_PASSWORD variables";
else
		podman run --pod=$PGADMIN_POD_NAME \
      -e PGADMIN_DEFAULT_EMAIL=$PGADMIN_DEFAULT_EMAIL \
      -e PGADMIN_DEFAULT_PASSWORD=$PGADMIN_DEFAULT_PASSWORD \
      --name pgadmin12 \
      -d dpage/pgadmin4;
fi
