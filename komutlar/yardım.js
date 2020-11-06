const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription('**Valexeria Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**⚡ v!yardım ⚡**" , " **Yardım Menüsünü Gösterir!** ")
  .addField("**⚡ v!yetkili ⚡**", " **Yetkili Komutlarını Gösterir!** ",)
  .addField("**⚡ v!kullanıcı ⚡**", " **Kullanıcı Komutlarını Gösterir!**`",)
  .addField("**⚡ v!eğlence ⚡**", " **Kayıt Komutlarını Gösterir!** ",)
  .addField("**⚡ v!seviye-yardım ⚡**", "**Seviye Komutlarunu Gösterir!** `",)
  .addField("**⚡ v!kayıt-yardım ⚡**", " **Kayıt Komutlarını Gösterir!** ",)
  .addField("**⚡ v!davet-yardım ⚡**", " **Davet Komutlarını Gösterir!** ",)
  .setImage("https://cdn.discordapp.com/attachments/754777085985161216/774335926725115974/200.gif")
  .setFooter('v!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " Wiski",)
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};