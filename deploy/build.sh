#! /bin/sh

cd /var/www/html/blog.nvnhan0810.com || exit

fnm use

npm install

npm run build

cp /var/www/html/blog.nvnhan0810.com/deploy/nginx/blog.nvnhan0810.com.conf /etc/nginx/conf.d/blog.nvnhan0810.com.conf