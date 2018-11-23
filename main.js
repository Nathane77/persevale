const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    bot.on('message', msg => {
        if(msg.content == '!ping'){
            msg.channel.send("pong");
            msg.channel.send("c'est droll les blague hein ??");
        } 
    });    
});

bot.login('NTExNDUxNDg0NjIyNDIyMDE2.DtneXA.5oNvtGpen7DxdCM_6jVv5oOwmN0');