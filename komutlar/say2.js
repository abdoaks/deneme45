  const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    let tag = "TAGINIZ"; // tagınız
    let sunucu = "SUNUCU ID"; //sunucu ID
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "EMOJİ İSMİ");           ///örnek const emoji = client.emojis.find(emoji => emoji.name === "mavitik"); 
  const arvelosembed = new Discord.RichEmbed()
  .setThumbnail("https://i.pinimg.com/originals/57/08/cc/5708ccaeded88baca4fbb51a60eb528a.gif")
  .setDescription(" **Sunucu İstatistikleri** ")
  .addField("🌙  **Sunucuda Bulunan Üye Sayısı** ",message.guild.memberCount)
    .addField("⚡  **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .addField("🔥  **Ses Kanallarında Bulunan Üye Sayısı** ", `${count}`)
    .addField("👑  **Taglı Üye Sayısı** ",
      message.guild.members.filter(m => m.user.username.includes("TAGINIZ")).size
    ) 
    .setFooter(client.user.username, message.guild.iconURL);
  message.channel.sendEmbed(arvelosembed)
    message.react(emoji)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//say
exports.help = {
  name: 'say',
  description: 'sunucuyu sayar.',
  usage: 'say'
//say
};