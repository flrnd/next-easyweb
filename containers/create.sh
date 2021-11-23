#!/bin/sh

if [ -z ${SERVER_POD_NAME+x} ]; then
  printf "%s\n" "export SERVER_POD_NAME";
else
  podman pod create --name $SERVER_POD_NAME -p 9876:80;
fi
