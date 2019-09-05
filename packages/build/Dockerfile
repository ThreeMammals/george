FROM node:10-slim as node

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    build-essential \
    lsb-release \
    ca-certificates \
    build-essential git \
    git \
    bzip2 \
    rlwrap \
    gnupg \
    curl \
    g++ \
    jq \
    libfontconfig \
    libfreetype6 \
    libltdl7 \
    make \
    python \
    python3 \
    python3-setuptools \
    rsync \
    ruby-full \
    unzip \
    wget \
    zip && \
    easy_install3 pip

RUN apt-get clean && \
    npm install -g concurrently lerna@3.4.0 npm@latest

RUN curl -sL https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor | \
    tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null && \
    AZ_REPO=$(lsb_release -cs) && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | \
    tee /etc/apt/sources.list.d/azure-cli.list && \
    apt-get update && \
    apt-get install azure-cli

RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg && \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php7.3.list && \
    apt update && \
    apt -y install php7.3 \
    php-bcmath && \
    curl -sS https://getcomposer.org/installer -o composer-setup.php && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer

RUN apt update && \
    apt -y install \
    php7.3-bcmath

RUN apt-get update && \
    apt -y install \
    php-xml \ 
    php7.3-mbstring 