const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name:"info",
    description:"info about the bot",

    async run (client, message, args){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Dagger Bot')
        .setAuthor(message.author.username)
        .setDescription('A new type of Dungeon Crawler! Pvp your friends, join clans, go on raids, earn rewards, become victorious!')
        .setThumbnail('https://media.discordapp.net/attachments/770711343686221846/772874717262118932/b1a7280063d6edf9761e4a3d2b841cdb.png')
        .setTimestamp()
        try {
            message.channel.send(exampleEmbed);
        } catch {
            message.reply('Sorry <@${message.author.username}> I cannot respond to you');
        }
    }
}
