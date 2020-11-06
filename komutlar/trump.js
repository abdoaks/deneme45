const Discord = require('discord.js');

exports.run = (client, message, args) => {
   let jukeyaz = args.slice(0).join(' ');
   if (jukeyaz.length < 1) return message.reply('Ne Yazdırmak İstiyorsun');
var request = require('request');
request(`https://pinkie-api.glitch.me/api/trump/${jukeyaz}`, function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var jukev = JSON.parse(body);
        const embed = new Discord.RichEmbed()
        .setColor("ffff")
        .setImage(jukev.message)
        return message.channel.sendEmbed(embed);
    }
});
}

    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'trump',
  description: 'zaa',
  usage: 'trump'
};