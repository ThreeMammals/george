docker build -t mijitt0m/build .
echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
docker push mijitt0m/build:latest