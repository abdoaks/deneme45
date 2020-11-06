const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış :slight_smile:`)
}
  db.set(`reklamK_${message.channel.id}`, message.channel.id)
  message.reply(`Bu özellik **başarıyla açıldı.** `)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["reklam-engel-aç","reklam-aç"], 
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel-aç',
  description: 'sayaç', 
  usage: 'reklamaç'
};