docker build -t mijitt0m/build .
echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
docker tag mijitt0m/build mijitt0m/build:1.0.2
docker push mijitt0m/build:latest
docker push mijitt0m/build:1.0.2