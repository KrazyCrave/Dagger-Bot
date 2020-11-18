const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name:"help",
    description:"Help command",

    async run (client, message, args) {
    
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Dagger Bot')
        .setAuthor(message.author.username)
        .setDescription('Commands: d!help | d!ping | d!ace | d!info | d!items | d!item_"item name" | d!bal | d!buy | d!daily | d!inventory | d!store | d!work')
        .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/772874717262118932/b1a7280063d6edf9761e4a3d2b841cdb.png')
        .setTimestamp()
        try {
        message.channel.send(exampleEmbed);
        } catch {
        message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}
