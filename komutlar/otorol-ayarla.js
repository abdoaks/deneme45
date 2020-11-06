const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`
${client.emojis.get("647760202875142154")} **Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : !otorol @rol #kanal**

 **Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremez :)
Eğer Herşey Zorsa Discord Dan Kolayca Ayarla : https://discord.gg/g2Buh9K **`
)
 
 if(!kanal) return message.channel.send(`
${client.emojis.get("647760202875142154")} **Ayarlamam İçin Bir Kanal Etiketlemeilisin.
Eğer Herşey Zorsa discord dan Kolayca Ayarla : https://discord.gg/g2Buh9K**
`)
 
  message.channel.send(`
║║║║║║║║║║║║║║║║║║║║║║║║║║║║║║
║►  Otorol Aktif                                                ◄║
║►  **${rol}** Olarak Ayarlandı                            ◄║
║►  Otorol  Kanalı **${kanal}** Olarak Ayarlandı ◄║
║║║║║║║║║║║║║║║║║║║║║║║║║║║║║║`)
 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-ayarla',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
