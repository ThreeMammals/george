#!/bin/sh
changed_packages=$1

npm install 
# bootstrap only the packages we need to build
lerna bootstrap --no-ci --scope=${changed_packages}
# run all the tests
lerna run --scope=${changed_packages} --stream --concurrency=1 test
# build all the packages that have changed and any deps..for docker containers this should build them for node packages it will push them to npm or private repo
lerna run --scope=${changed_packages} --stream --concurrency=1 build-ci
# publish all the packages that have changed
lerna run --scope=${changed_packages} --stream --concurrency=1 publish