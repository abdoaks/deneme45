const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  const duration = client.uptime
const embed = new Discord.RichEmbed()
.setAuthor("", client.user.avatarURL)
.setTitle("")
.setURL("")
.setDescription("")
.setColor("BLUE")
.setTimestamp()
.setFooter("", client.user.avatarURL)
.addField("Kullanılan RAM miktarı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam RAM miktarı", `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam sunucu sayısı", `${client.guilds.size.toLocaleString()}`)
.addField("<a:sar:702923553783414865>Bilgi<a:sar:702923553783414865>", `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${client.users.size}, Üye! / Shard ID: **Yok!**
`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['botbilgi'], 
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};
