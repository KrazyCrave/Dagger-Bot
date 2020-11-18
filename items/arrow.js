const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name:"item_arrow",
    description:"Gives info on Arrows",

    async run (client, message, args) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Arrow')
            .setAuthor(message.author.username)
            .setDescription('Ammunition For The Bow')
            .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/772874717262118932/b1a7280063d6edf9761e4a3d2b841cdb.png')
            .addFields(
                { name: 'RARITY TYPE', value: 'Uncommon' },
                { name: '\u200B', value: '\u200B' },
                { name: 'DAMAGE', value: '4-6 hp', inline: true },
                { name: 'WORTH', value: '15 gp', inline: true },
            )
            .setTimestamp()
            try {
            message.channel.send(exampleEmbed);
            } catch {
            message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}
