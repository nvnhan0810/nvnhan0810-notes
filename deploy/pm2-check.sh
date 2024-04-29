#!/bin/sh

PM2_EXIST=$(if pm2 list 2> /dev/null | grep -q blog-nvnhan0810; then echo "Yes" ; else echo "No" ; fi)

if [ $PM2_EXIST = Yes ] ; then
    pm2 stop blog-nvnhan0810
    pm2 delete blog-nvnhan0810
fi

pm2 --name blog-nvnhan0810 start npm -- start
