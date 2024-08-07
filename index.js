'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAB14hXr6TYQBO1hfAZBb1ZCG2RRgIRDZAYtTaxAGA0Idff5irMlvlZCynx2L0utcnhY6ns6nZAme30glQ0duVdgV3T8OFiP4HmdIJcLbPkDXuzZA7nPDCwOBZAKehb3DQQPP2vj6g2vDohACmhERR7LXY47E1Nt09CDXQBWIMG89yEC2kKvF9bKXNI4ZBWBiqPsUy9UMsDQNWUuPPXlWEEhsFXWZAQwZDZD',
  verifyToken: 'thisisasampletoken',
  appSecret: '1eb4c94cbee35d7c7c1fdcde621d70f4'
}); 



bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  console.log('text', text);
  const userId = payload.sender.id;
  chat.say(userId, 'Hello World');
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
  console.log('payload', payload);
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});

bot.start();