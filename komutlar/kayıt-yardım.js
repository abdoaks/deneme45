const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Kayıt Yardım Menüsü")
  .setDescription('**Valexeria  Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**v!kayıt-kanal-ayarla #kanal**" , ":tada: **Kayıt Kanalını Ayarlar!** :tada:")
  .addField("**v!kanal-aylara**", ":tada: **Kayıt Bildirim Kanalını Ayarlar!** :tada:",)
  .addField("**v!kayıt-verilecek-rol-ayarla @rol**", ":tada: **Kayıt Olunca Verilecek Rolü Ayarlar!**`:tada:",)
  .addField("**v!kayıt-alınacak-rol-ayarla @rol**", ":tada:**Kayıt Olunca Alınacak Rolü Ayarlar!** `:tada:",)
  .addField("**v!kayıt-ol**", ":tada: **Kayıt Olursunuz!** :tada:",)
  .addField("**v!kayıt-yardım**", ":tada: **Kayıt Komutlarını Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setImage("")
  .setFooter('v!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **wiski** ",)
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};