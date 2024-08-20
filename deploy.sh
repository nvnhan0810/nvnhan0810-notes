#! /bin/sh

set -e

git pull origin main

fnm use

npm install -g pnpm

pnpm install

pnpm run build

npm i -g pm2

PM2_EXIST=$(if pm2 list 2>/dev/null | grep -q nvnahn0810-notes; then echo "Yes"; else echo "No"; fi)

if [ $PM2_EXIST = Yes ]; then
	pm2 stop nvnahn0810-notes
	pm2 delete nvnahn0810-notes
fi

pm2 --name nvnahn0810-notes start pnpm -- start -p 3002

