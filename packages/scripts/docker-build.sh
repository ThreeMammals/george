#!/bin/sh

docker run --rm \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --mount type=bind,source=$(which docker),target=$(which docker) \
    -v "${HOME}/.npm:/root/.npm" \
    -v ${HOME}/.ssh:/root/.ssh \
    -v "$(pwd):/code" \
    -w "/code" \
    -e GEORGE_NPMRC=${GEORGE_NPMRC} \
    -e GEORGE_ACR_LOGIN_NAME=${GEORGE_ACR_LOGIN_NAME} \
    -e GEORGE_ACR_URL=${GEORGE_ACR_URL} \
    -e GEORGE_ACR_USERNAME=${GEORGE_ACR_USERNAME} \
    -e GEORGE_ACR_PASSWORD=${GEORGE_ACR_PASSWORD} \
    mijitt0m/build \
    ./packages/scripts/build.sh