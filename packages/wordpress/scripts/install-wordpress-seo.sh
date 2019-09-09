#!/bin/bash

echo "Installing Yoast"

if [ -d "src/wp-content/plugins/wordpress-seo" ]
then
    echo "Repo cloned already"
    cd src/wp-content/plugins/wordpress-seo
    composer install
    yarn
    grunt build
else
    echo "Cloning repo"
    cd src/wp-content/plugins/
    git clone https://github.com/Yoast/wordpress-seo.git
    cd wordpress-seo
    composer install
    yarn
    grunt build
fi

cd ../../../

echo "Finished installing Yoast"



