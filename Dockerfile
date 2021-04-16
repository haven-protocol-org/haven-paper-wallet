FROM node:lts-alpine3.10 as builder

RUN apk add git bash

COPY . /var/www

WORKDIR /var/www

RUN npm install
RUN npm run build

FROM nginx:alpine as runner

COPY --from=builder /var/www/index.html /usr/share/nginx/html/
COPY --from=builder /var/www/dist /usr/share/nginx/html/dist/