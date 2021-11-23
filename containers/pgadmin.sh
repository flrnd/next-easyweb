#!/bin/sh

VERSION=0
REVISION=2

print_help() {
   # Display Help
   echo "$0 ceate a pgadmin container inside a pod."
   echo
   echo "Syntax: $0 [-n|e|p|d|c|h|v]"
   echo "options:"
   echo "n     set pod name."
   echo "e     set pgadmin default email"
   echo "p     set pgadmin default password"
   echo "d     set pgadmin container image name"
   echo "c     set container name"
   echo "h     Print this Help."
   echo "v     Print version and exit."
   echo
   echo "Example: $0 -n podname -e my@email.com -p somepwd -d 'dpage/pgadmin4' -c pgadmin12"
   echo
}

while getopts "n:e:p:d:c:hv" flag; do
  case $flag in
    n) POD_NAME=${OPTARG};;
    e) EMAIL=${OPTARG};;
    p) PASSWORD=${OPTARG};;
    d) IMAGE_NAME=${OPTARG};;
    c) CONTAINER_NAME=${OPTARG};;
    h) print_help
      exit;;
    v) echo "$0 $VERSION.$REVISION"
      exit;;
    *) print_help
      exit 1;;
  esac
done

if [ -z ${POD_NAME+x} ] || [ -z ${EMAIL+x} ] || [ -z ${PASSWORD+x} ] || [ -z ${CONTAINER_NAME+x} ]; then
  echo "$POD_NAME $EMAIL $PASSWORD $CONTAINER_NAME $IMAGE_NAME"
  print_help
else
  printf "Creating %s inside %s with email %s and password %s\n" "$CONTAINER_NAME" "$POD_NAME" "$EMAIL" "$PASSWORD"
  podman run --pod=$POD_NAME \
      -e PGADMIN_DEFAULT_EMAIL=$EMAIL \
      -e PGADMIN_DEFAULT_PASSWORD=$PASSWORD \
      --name $CONTAINER_NAME \
      -d $IMAGE_NAME;
fi
