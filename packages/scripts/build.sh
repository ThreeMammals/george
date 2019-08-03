docker run --rm \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --mount type=bind,source=$(which docker),target=$(which docker) \
    -v "${HOME}/.docker/config.json:/root/.docker/config.json" \
    -v "${HOME}/.npm:/root/.npm" \
    -v ${HOME}/.ssh:/root/.ssh \
    -v "$(pwd):/code" \
    -w "/code" \
    george/build \
    ./packages/scripts/thing.sh