'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAB14hXr6TYQBO1hfAZBb1ZCG2RRgIRDZAYtTaxAGA0Idff5irMlvlZCynx2L0utcnhY6ns6nZAme30glQ0duVdgV3T8OFiP4HmdIJcLbPkDXuzZA7nPDCwOBZAKehb3DQQPP2vj6g2vDohACmhERR7LXY47E1Nt09CDXQBWIMG89yEC2kKvF9bKXNI4ZBWBiqPsUy9UMsDQNWUuPPXlWEEhsFXWZAQwZDZD',
  verifyToken: 'thisisasampletoken',
  appSecret: '1eb4c94cbee35d7c7c1fdcde621d70f4'
}); 

app.post('/webhook', function(req, res) {
  console.log(req);
  bot._handleMessage(req.body);
  res.end(JSON.stringify({ status: 'ok' }));
});




bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  console.log(`The user said: ${text}`);
  chat.say(`Echo: ${text}`);
});


bot.start();