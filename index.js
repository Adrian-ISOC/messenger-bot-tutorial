'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAG3z4f9pZAYBOZBZC5ZCN60WT5ZAX6DqiUgPr7lcJYutFmgIVc8hs7zpjhs5kdYhFyO17Ok36YmZAdNZAXTIwPSOiQNG6pzKZChbfaaEQ8F8ACvhWOIUuBc6JatjNyMUV51WMGNW37vXk85y2StGw5uGtyKLiZCucCU5IJ2PCGYqKxhCqmCfzernoQHakLb8vmJU4ZBL2UAKyeAZDZD',
  verifyToken: 'thisisasampletoken',
  appSecret: '5f77b2954c9721aa700a609f75af126a'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  console.log('text', text);
  chat.say(`Echo: ${text}`);
});

bot.start();