#!/bin/bash

echo "Upgrading Pushy"
composer upgrade

cd src/wp-content/plugins/pushy

echo "Upgrading Pushy Dependencies"

composer upgrade

cd ../../../../