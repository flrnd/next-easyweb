#!/bin/sh

### VERSION
VERSION=0
REVISION=2

print_help() {
   # Display Help
   echo "$0 ceate an empty pod with name and exposed port."
   echo
   echo "Syntax: $0 [-n|p|h|v]"
   echo "options:"
   echo "n     set Pod name."
   echo "p     set Pod exposed port"
   echo "h     Print this Help."
   echo "v     Print version and exit."
   echo
   echo "Example: $0 -n podname -p 80"
   echo
}

while getopts "n:p:hv" flag; do
  case $flag in
    n) POD_NAME=${OPTARG};;
    p) PORT=${OPTARG};;
    h) print_help
      exit;;
    v) echo "$0 $VERSION.$REVISION"
      exit;;
    *) print_help
      exit 1;;
  esac
done

if [ -z ${SERVER_POD_NAME+x} ] && [ -z ${PORT+x} ]; then
  print_help
else
  printf "Creating pod... name: %s exposed port: %s\n" "$POD_NAME" "$PORT"
  podman pod create --name $POD_NAME -p 9876:$PORT -p 5432:5432
fi
