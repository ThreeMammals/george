#!/bin/sh

# lerna needs these 
git config --global user.email "tom@threemammals.com"
git config --global user.name "Tom Pallister"

# Get the packages that have changed
changed_packages=$(echo "{$(lerna changed --json --loglevel=silent | jq -c -r 'map(.name) | join(",")'),}")

echo "changed_packages=${changed_packages}"

if [ ${changed_packages} = "{,}" ] || [ ${changed_packages} = "{}" ] || [ ${changed_packages} = {} ]
then
  echo "No packages were changed, nothing to build....if there was something to build put it in a package!!"
  exit 0
fi

docker run --rm \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --mount type=bind,source=$(which docker),target=$(which docker) \
    -v "${HOME}/.npm:/root/.npm" \
    -v "$(pwd):/code" \
    -w "/code" \
    -e GEORGE_NPMRC=${GEORGE_NPMRC} \
    -e GEORGE_ACR_LOGIN_NAME=${GEORGE_ACR_LOGIN_NAME} \
    -e GEORGE_ACR_URL=${GEORGE_ACR_URL} \
    -e GEORGE_ACR_USERNAME=${GEORGE_ACR_USERNAME} \
    -e GEORGE_ACR_PASSWORD=${GEORGE_ACR_PASSWORD} \
    mijitt0m/build \
    ./packages/scripts/build.sh changed_packages