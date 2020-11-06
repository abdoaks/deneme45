const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Davet Yardım Menüsü")
  .setDescription('**Valexeria  Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**v!davet-kanal #kanal **" , ":tada: **Sunucuya Girenin-Çıkanın Kim Tarafından Davet Edildiğini Göstereceği Kanalı Ayarlar!** :tada:")
  .addField("**v!davet-kanal-sıfırla [rol etiketi]**", ":tada: **Davetlerin Gösterildiği Kanal Sıfırlanır-Silinir** :tada:",)
  .addField("**v!davet-sil @kullanıcı [SAYI]**", ":tada: **Belirtilen Kişinin Belirtilen Kadar Daveti Silinir!**`:tada:",)
  .addField("**v!davetler @kullanıcı **", ":tada:**Belirtilen Kullanıcının Davet Sayısını Gösterir!** `:tada:",)
  .addField("**v!davet-ekle @kullanıcı [SAYI] **", ":tada: **Belirtilen Kişiye Belirtilen Sayıda Davet Ekler!** :tada:",)
  .addField("**v!davet-sıfırla @kullanıcı **", ":tada: **Belirtilen Kullanıcının Davet Sayılarını Siler-Sıfırlar!** :tada:",)
  .setFooter('**--------------------------**')
  .setFooter('v!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **wiski ** ",)
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
  name: 'davet-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};