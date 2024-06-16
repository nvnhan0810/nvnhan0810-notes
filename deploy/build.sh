#! /bin/sh

cd /var/www/html/notes.nvnhan0810.com || exit

fnm use

npm install -g pnpm

pnpm install

pnpm exec prisma migrate generate

# pnpm exec prisma migrate deploy

pnpm run build

cp /var/www/html/notes.nvnhan0810.com/deploy/nginx/notes.nvnhan0810.com.conf /etc/nginx/conf.d/notes.nvnhan0810.com.conf

