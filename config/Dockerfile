FROM nginx:stable-alpine3.21-perl

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY client/dist/ /usr/share/nginx/html/

RUN chmod -R a+rX /usr/share/nginx/html
