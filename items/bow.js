const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name:"item_bow",
    description:"Gives info on the Bow",

    async run (client, message, args) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bow')
            .setAuthor(message.author.username)
            .setDescription('A Long Ranged Weapon| Requires Arrows')
            .setThumbnail('https://www.clipartmax.com/png/middle/414-4147926_transparent-bow-and-arrow-transparent-background-bow-and-arrow-png.png')
            .addFields(
                { name: 'RARITY TYPE', value: 'Rare' },
                { name: '\u200B', value: '\u200B' },
                { name: 'DAMAGE', value: '4-6 hp', inline: true },
                { name: 'WORTH', value: '25 gp', inline: true },
            )
            .setTimestamp()
            try {
            message.channel.send(exampleEmbed);
            } catch {
            message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}
