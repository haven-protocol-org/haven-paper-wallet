FROM node:lts-alpine3.10

RUN apk add git bash

COPY . /var/www

WORKDIR /var/www

RUN npm install

