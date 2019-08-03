echo "Publishing"

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",\t ]//g')

PACKAGE_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/["@,\ ]//g')

echo PACKAGE_NAME=$PACKAGE_NAME
echo PACKAGE_VERSION=$PACKAGE_VERSION

DOCKER_TAG=$PACKAGE_NAME:$PACKAGE_VERSION
DOCKER_LATEST_TAG=$PACKAGE_NAME:latest
echo $DOCKER_TAG
echo $DOCKER_LATEST_TAG

docker login $GEORGE_ACR_URL -u $GEORGE_ACR_USERNAME -p $GEORGE_ACR_PASSWORD

docker tag $PACKAGE_NAME $GEORGE_ACR_URL/$DOCKER_LATEST_TAG
docker tag $PACKAGE_NAME $GEORGE_ACR_URL/$DOCKER_TAG

docker push $GEORGE_ACR_URL/$DOCKER_TAG
docker push $GEORGE_ACR_URL/$DOCKER_LATEST_TAG