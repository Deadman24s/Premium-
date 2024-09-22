const Discord = require('discord.js');

const osu = require('node-os-utils');

const mem = osu.mem

const cpu = osu.cpu

module.exports = {

name: "botstats",

async execute(client, message, args) {

const memoryUsage = (await mem.info()).freeMemMb + "MB"

const usedMemMbv = (await mem.info()).usedMemMb + "MB"

const totalMemMbms = (await mem.info()).totalMemMb + "MB"

const freeMemPercentages = (await mem.info()).freeMemPercentage + "%"

const usedMemPercentages = (await mem.info()).usedMemPercentage + "%"

const cpuUP = (await cpu.info()).cpuPercentage + "%"

const embed = new Discord.MessageEmbed()

.setColor('RANDOM')

setTitle("Statistics")

.setDescription("Stats of the bot")

.setTimestamp()

.setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

embed.addFields({name:"free ram", value: memoryUsage +" "+ freeMemPercentages,inline:true})

embed.addFields({name:"used ram:", value: usedMemMbv +" "+ usedMemPercentages,inline:true})

embed.addFields({name:"total ram:", value: totalMemMbms ,inline:true})

embed.addFields({name:"cpu usage:", value: cpuUP ,inline:true})

message.channel.send(embed)

message.channel.send(embed)

}

}
