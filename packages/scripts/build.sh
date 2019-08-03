#!/bin/sh

docker run --rm \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --mount type=bind,source=$(which docker),target=$(which docker) \
    -v "${HOME}/.docker/config.json:/root/.docker/config.json" \
    -v "${HOME}/.npm:/root/.npm" \
    -v ${HOME}/.ssh:/root/.ssh \
    -v "$(pwd):/code" \
    -w "/code" \
    -e GEORGE_NPMRC=${GEORGE_NPMRC} \
    -e GEORGE_ACR_LOGIN_NAME=${GEORGE_ACR_LOGIN_NAME} \
    -e GEORGE_ACR_URL=${GEORGE_ACR_URL} \
    george/build \
    ./packages/scripts/thing.sh