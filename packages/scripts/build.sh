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

# Build, publish and deploy the packages that have changed.
docker run --rm \
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \
    --mount type=bind,source=$(which docker),target=$(which docker) \
    -v "${HOME}/.docker/config.json:/root/.docker/config.json" \
    -v "${HOME}/.npm:/root/.npm" \
    # -v ${HOME}/.ssh:/root/.ssh \
    -v "$(pwd):/code" \
    -w "/code" \
    node:10.16.1-jessie
    # bootstrap only the packages we need to build
    lerna bootstrap --no-ci --scope=${changed_packages} && \
    # do all the versioning and push the tags back to the remote
    lerna version --conventional-commits --changelog-preset angular --yes
    # # run all the tests
    # lerna run --scope=${changed_packages} --stream --concurrency=1 test && \
    # # build all the packages that have changed and any deps..for docker containers this should build them for node packages it will push them to npm or private repo
    # lerna run --scope=${changed_packages} --stream --concurrency=1 build-ci && \
    # # publish all the packages that have changed
    # lerna run --scope=${changed_packages} --stream --concurrency=1 publish