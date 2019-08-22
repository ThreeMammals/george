FROM node:10-slim as node

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:ondrej/php && \
    apt-get update && \
    apt-get install php7.3 && \
    apt-get update && apt-get install -y \
    apt-transport-https \
    build-essential \
    ca-certificates \
    build-essential git \
    git \
    bzip2 \
    rlwrap \
    gnupg \
    lsb-release \
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
    easy_install3 pip && \
    apt-get clean && \
    npm install -g concurrently lerna@3.4.0 npm@latest && \ 
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor | \
    tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null && \
    AZ_REPO=$(lsb_release -cs) && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | \
    tee /etc/apt/sources.list.d/azure-cli.list && \
    apt-get update && \
    apt-get install azure-cli && \
    curl --silent --show-error https://getcomposer.org/installer | php