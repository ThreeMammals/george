# George

The platform that runs [https://www.threemammals.com/](https://www.threemammals.com/).

George uses Wordpress as a CMS. It pushes messages out of Wordpress when changes happen using the [Pushy](https://github.com/ThreeMammals/pushy) plugin. The messages are placed on a RabbitMQ topic and ingested via a NodeJs process into a Postgres database. When the messages are ingested the Wordpress post_content is parsed into a React tree before saving. There is a GraphQL API over the Postgres database. When the ingest process finishes another message is published to RabbitMQ saying the work is done. Another NodeJS process listens to this message and statically generates the website. Finally NGINX is running over the top of Wordpress, the GraphQL API and the website itself.

## Why

Why not??? For reals though...my place of work has a headless Wordpress / React solution that calls the Wordpress "REST" APIs. We struggle with this because the APIs are not very performant and this has lead to some very complex caching and cache invalidation rules / processes. We have often talked about pushing the data out of Wordpress and storing it in a read optimised way (Please note maybe Postgres isnt this, its just to experiment). This would enable us in theory to look up everything on an index and get rid of our complex caching.

I set out to build the barebones of this platform for the [https://threemammals.com](https://threemammals.com) website to see what is and isn't possible!!!

## Features

George supports creating, editing and deleting posts. It is very basic. The posts will appear on a /blog path.

The website itself is statically generated using [https://github.com/react-static/react-static](https://github.com/react-static/react-static) but any react renderer would do.

When the render process runs it uses GraphQL to load the React tree of a given post from the API. It then swaps out name strings for React component functions in memory. It throws the resulting tree to React render and away we go.

One of the cool things about react-static is that it supports incremental builds unlike Gatsby so we only build the article that has changed. Rather than the whole site! Unless we want to of course :)

## Prerequisite

- Node 10
- Docker
- Mac (only tested mac, definitely won't work on Windows, probably works on various Linux distributions)

## Steps to build containers and george running locally

1. Clone this repository
2. Before you do anything create a self signed certificate for localhost and put it in `package/serve/certs/live/localhost`. If you don't know how to do this Google should help.
3. `npm run bootstrap`
4. `npm run lerna -- --scope=@george/wordpress install-pushy --stream` to install Pushy into Wordpress plugins.
5. Make changes, git add and commit
6. We can publish containers to either ECR or ACR by default. You can switch which repo you are using by editing `./packages/scripts/publish.sh` to point at `./packages/scripts/publish-azure.sh` or `./packages/scripts/publish-azure.sh`.
7. Depending on your chosen container registry set the following environmental variables.
    - Azure

    ```bash
    export GEORGE_ACR_LOGIN_NAME=XXX
    export GEORGE_ACR_URL=XXX.azurecr.io
    export GEORGE_ACR_USERNAME=XXX
    export GEORGE_ACR_PASSWORD=XXX
    ```

    - AWS

    ```bash
    export GEORGE_ECR_URL=032803037394.dkr.ecr.eu-west-1.amazonaws.com
    export GEORGE_AWS_REGION=eu-west-1
    ```

8. We publish npm packages scoped @george to a private repository using .npmrc via a process where we write an environmental variable called `GEORGE_NPMRC` into .npmrc and then delete it afterwards. This means in order to publish you need to set

    ```bash
    export GEORGE_NPMRC="registry=https://registry.npmjs.org/\r\n@george:XXXXXXXXX"
    ```

    Where XXXXXXXXX is your details for the private repository. The value needs to be escaped.

9. `npm run build`
10. Run locally via docker compose `npm run start-dev`
11. Setup wordpress:
    1. Go to https://localhost/admin/wp-admin/install.php
    2. Install WP & Login
    3. Go to Plugins and Activate Pushy
    4. Go to Settings > Pushy Options and tick AMQPPublisher and click Save Changes.
    5. Go to Settings > Permalinks and tick plain then save Changes.
12. Check database migrations have worked
    1. Go to http://localhost:8080 and login using the postgres details from docker-compose.yml
    2. Check there is a table called posts in the database george.
13. Check GraphQL is working
    1. Go to https://localhost/api and verify GraphQL UI loads
    2. Make a request to https://localhost/api with the content below

    ```graphql
    {
      posts {
        title
      }
    }

    ```

14. Check the website is working
    1. Go to https://localhost/ and you should see the ThreeMammals homepage.
    2. Click on Blog in the menu there should be no posts in the list.
    3. Go to Wordpress and edit a post, click Update / Publish.
    4. Go to https://localhost/blog/ and refresh the page for 30 seconds and the post should appear.
        - If it doesn't check the logs for the render container. There is probably something wrong. Work out what it is or raise a GitHub issue.
        - If it appears you are all good George is working.

## Running database migrations locally

1. Set the following environmental variables

    ```bash
    export GEORGE_POSTGRES_USER=example
    export GOERGE_POSTGRES_PASSWORD=george
    export GOERGE_POSTGRES_HOST=localhost
    ```

2. `lerna run --scope=@george/data migrate-up --stream` to migrate up.
3. `lerna run --scope=@george/data migrate-down --stream` to migrate down.

## Environmental variables

Set these locally if you are doing any kind of debugging etc outside of docker-compose.

```bash
export FQDN_OR_IP=localhost
export GEORGE_PUBLIC_API_URL=http://localhost:4000/
export INTERNAL_SITE_ROOL=https://localhost/
export WORDPRESS_SITE_ROOT=https://localhost/
export GEORGE_SITE_ROOT=https://localhost/
export GEORGE_RABBITMQ_URL=amqp://localhost
export GEORGE_DATABASE_HOST=localhost
export GEORGE_API_URL=http://localhost:4000/
```

## Deploying to a real environment

I have a separate repository with a production docker-compose.yml and NGINX config.

I mount the config on the serve container like so..

```yml
        volumes:
        - /home/azureuser/default.conf:/etc/nginx/conf.d/default.conf
```

These files contain all my [https://www.threemammals.com/](https://www.threemammals.com/) specific stuff. For example the production docker-compose.yml has lots of different values from environmental variables!

After that it is up to you to work out how to deploy if you want to use it :) I suggest the easiest way would be docker-machine to a VM :P

One final hint I use [https://github.com/mjstealey/wordpress-nginx-docker](https://github.com/mjstealey/wordpress-nginx-docker) to get SSL into the serve container.
