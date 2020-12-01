module.exports = {
    name: 'muteRole',
    description: "This server mutes the desired user!",
    execute(message, args) {
        //Sets the desired Role(The role that is muted)
        const role = message.guild.roles.cache.get('783062995541819392');
        //defines the Mentioned user
        const member = message.mentions.members.first()


        //Checks Your Permissions
        if (!message.member.roles.cache.has('781990035858915340')) {
            return message.reply("You can't use mute command");
        }

        //Checks if the role exists
        if (!role) {
            return message.reply("Can't find that role")
        }

        //Checks if someone was mentioned in the message
        if (!member) {
            return message.reply('Please mention a member');
        }

        //Gives desired user the muted role
        member.roles.add(role).then(newMember => {
            message.channel.send(`Successfully muted ${member.user}`)
        })
    }
}
