const Eris = require('eris');
const bot = new Eris('your token goes here');

bot.on('ready', () => {
	console.log('Bot is ready!');
});

bot.on('messageCreate', msg => {
	if (msg.content === 'ping') {
		bot.createMessage(msg.channel.id, 'pong');
	}
});

bot.connect();
