#!/bin/bash

echo "Installing Pushy"
composer install

cd src/wp-content/plugins/pushy

echo "Installing Pushy Dependencies"

composer install

cd ../../../../
