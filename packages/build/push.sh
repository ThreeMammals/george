echo $GEORGE_DOCKER_PASSWORD | docker login -u $GEORGE_DOCKER_USERNAME --password-stdin
docker push mijitt0m/build:latest