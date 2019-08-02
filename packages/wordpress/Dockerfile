# use fpm version cos we use fastcgi proxying with nginx
FROM wordpress:5.2.1-php7.3-fpm
# we need these for rabbitmq
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install sockets
# now copy our theme code in
COPY ./src/wp-content /var/www/html/wp-content

RUN pwd
RUN ls ./wp-content/plugins