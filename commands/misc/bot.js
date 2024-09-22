const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'ban',
	userPermissions: ["BanMembers"],
	botPermissions: ["BanMembers"],
  run: async (client, message, args) => {
  
    const member = message.mentions.members.first();
    if (!member) return message.reply('Please mention a valid member of this server.');

    if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cannot ban members with the same or higher role as you.');
    if (member.id === message.author.id) return message.reply('You cannot ban yourself.');
    if (member.id === client.user.id) return message.reply('I cannot ban myself.');

  
    const reason = args.slice(1).join(' ') || 'No reason provided';

    
    try {
      await member.send({embeds: [
				new EmbedBuilder()
				.setTitle(`Banned`)
				.setColor("Red")
				.setDescription(`You were banned from ${message.guild.name} for: ${reason}`)
				.setFooter({ text: `Banned by ${message.author.tag}` })
			]});
			await member.ban({reason: reason});
const embed = new EmbedBuilder()
.setTitle('Member Banned')
.setDescription(`**${member} was banned** | **_${reason}_**`)
.setColor('#00ff00')
.setFooter({ text: `Banned by ${message.author.tag}` })
.setTimestamp();
message.channel.send({ embeds: [embed] });
} catch (err) {
			console.log(err)
message.reply(`An error occurred while trying to ban ${member}.`);
}
}
}
