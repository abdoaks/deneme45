const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Valexeria  Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**v!istatistik **" , ":tada: **Botun İstatistiğini Gösterir!** :tada:")
  .addField("**v!rol-bilgi [rol etiketi]**", ":tada: **Etiketlediğiniz Rolün İstatistiklerine Bakarsınız** :tada:",)
  .addField("**v!tavsiye [açıklama]**", ":tada: **Tavsiye Kanalına Mesaj Atarsınız!**`:tada:",)
  .addField("**v!servericon **", ":tada:**Yazılan Sunucunun Fotoğrafını Atar!** `:tada:",)
  .addField("**v!yardım **", ":tada: **Yardım menüsünü açar** :tada:",)
  .addField("**v!davet **", ":tada: **Botun davet linkini atar.** :tada:",)
  .addField("**v!bot-bilgi **", ":tada: **Bot bilgilerine bakarsınız** :tada:",)
  .addField("**v!bilgi **", ":tada: **Bizim bilgilerimize bakarsınız** :tada:",)
  .addField("**v!korona [Ülke Kodu]**", ":tada: **Belirtilen Bölgenin Korona İstatistiğine Bakarsınız!** :tada:",)
  .addField("**v!banlist**", ":tada: **Banlı Listesini Gösterir!** :tada:",)
  .addField("**v!sunucu-bilgi**", ":tada: **Sunucu Hakkında Bilgi Verir!** :tada:",)
  .addField("**v!ping**", ":tada: **Botun Pingini Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setFooter('v!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developers**", " **wiski** ",)
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
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};