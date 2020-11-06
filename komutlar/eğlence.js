const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**MaximusBoys Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**!aşkölçer [etiket]**" , " **Etiketlediginiz Kişi İlt Aşkınızı Ölçer Siniz** ")
  .addField("**!öp [etiket] **", " **Etiketlediğiniz Kişiyi Öpersiniz** ",)
  .addField("**!top10 **", " **Tavsiye Kanalına Mesaj Atarsınız!**`",)
  .addField("**!saat **", "**Saatin Kaç Oldugunu Gösterir** `",)
  .addField("**!koş **", " **Koşarsınız**",)
  .addField("**!banner-yaz **", "**Mesajınızı Banner Olarak Yazar!** `",)
  .addField("**!embed-yaz **", "**Mesajınızı Embed Olarak Yazar!** `",)
  .addField("**!trump [yazı] **", " **ABD Başkanının Tweetlediği Gönderi Düzenleyip Atar!** ",)
  .addField("**!kasa-aç **", " **CS:GO Kasa Açar!**",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Asreaper** ",)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eglence"],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};