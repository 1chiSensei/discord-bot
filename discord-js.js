const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Bot is ready!');
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login('your bot token goes here');
