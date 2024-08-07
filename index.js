'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAG3z4f9pZAYBOZBZC5ZCN60WT5ZAX6DqiUgPr7lcJYutFmgIVc8hs7zpjhs5kdYhFyO17Ok36YmZAdNZAXTIwPSOiQNG6pzKZChbfaaEQ8F8ACvhWOIUuBc6JatjNyMUV51WMGNW37vXk85y2StGw5uGtyKLiZCucCU5IJ2PCGYqKxhCqmCfzernoQHakLb8vmJU4ZBL2UAKyeAZDZD',
  verifyToken: 'thisisasampletoken',
  appSecret: '5f77b2954c9721aa700a609f75af126a'
}); 



bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  const userId = payload.sender.id;
  bot.say(userId, 'Hello World');
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
  console.log('payload', payload);
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});

bot.start();