#!/bin/sh
# this needs to stay bin/sh or the $GEORGE_NPMRC wont load properly.
echo $GEORGE_NPMRC > .npmrc 