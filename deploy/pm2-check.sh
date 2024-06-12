#!/bin/sh

PM2_EXIST=$(if pm2 list 2>/dev/null | grep -q notes-nvnhan0810; then echo "Yes"; else echo "No"; fi)

if [ $PM2_EXIST = Yes ]; then
	pm2 stop notes-nvnhan0810
	pm2 delete notes-nvnhan0810
fi

cd /var/www/html/notes.nvnhan0810.com && pm2 --name notes-nvnhan0810 start pnpm -- start

