#!/bin/sh

VERSION=0
REVISION=2

print_help() {
   # Display Help
   echo "$0 ceate a postgresql container inside a pod."
   echo
   echo "Syntax: $0 [-n|u|p|d|c|h|v]"
   echo "options:"
   echo "n     set pod name."
   echo "u     set postgresql user."
   echo "p     set postgresql password."
   echo "d     set postgresql image name."
   echo "c     set container name"
   echo "v     set container volume path."
   echo "h     Print this Help."
   echo "V     Print version and exit."
   echo
   echo "Example: $0 -n podname -u pguser -p pgpwd -d postgresql -c database -v ~/.local/share/containers/volume"
   echo
}

while getopts "n:u:p:d:c:v:hV" flag; do
  case $flag in
    n) POD_NAME=${OPTARG};;
    u) USER=${OPTARG};;
    p) PASSWORD=${OPTARG};;
    d) IMAGE_NAME=${OPTARG};;
    c) CONTAINER_NAME=${OPTARG};;
    v) VOLUME=${OPTARG};;
    h) print_help
      exit;;
    V) echo "$0 $VERSION.$REVISION"
      exit;;
    *) print_help
      exit 1;;
  esac
done

if [ -z ${POD_NAME+x} ] || [ -z ${USER+x} ] || [ -z ${PASSWORD+x} ] || [ -z ${CONTAINER_NAME+x} ] || [ -z ${VOLUME+x} ]; then
  echo "$POD_NAME $USER $PASSWORD $CONTAINER_NAME $IMAGE_NAME $VOLUME"
  print_help
else
  podman run --pod=$POD_NAME \
    -v $VOLUME:/var/lib/postgresql/data:Z \
    -e POSTGRES_PASSWORD=$PASSWORD \
    -e POSTGRES_USER=$USER \
    --name $CONTAINER_NAME \
    -d $IMAGE_NAME;
fi

