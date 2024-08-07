'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAG3z4f9pZAYBOwhadtT6wvIl1vMA8UBszErT7h2nWW3OzkVDMk11ZBtkQwRwOxSvhatozlZAtSUxc5ImZAlIYvkACsyWOyx7suNQyHeNH8YTTM4M3c3ZBmynQuYOcE8LvfzgQDFCdPjZCVATZCmRk4vzXPz2xRrynJEQjlQW9K2yc0KedVmHM6dZCvKGuzRBQ3hsEE4zXCo8QZDZD',
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