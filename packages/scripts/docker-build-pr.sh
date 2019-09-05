#!/bin/sh

npm install

# lerna needs these to push tags to remote
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

# Versioning for PRs. We use the commit sha to make the version in package.json unique
# so that when we push node modules to repo they are unique. This means we can pull those
# into containers for PR builds so we are building against everything on the PR.
COMMIT=$(git rev-parse HEAD)
lerna version prepatch --preid $COMMIT --conventional-commits --no-changelog --no-git-tag-version --yes

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
    mijitt0m/build:1.0.2  \
    ./packages/scripts/build-pr.sh ${changed_packages}