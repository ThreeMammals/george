#!/bin/bash

# This has a crappy glob because it gets called from publish.sh which is getting called from with a package in the packages folder. The purpose of this file is to quickly swap publishing to AWS ECR or Azure ACR.
./node_modules/@george/scripts/publish-azure.sh