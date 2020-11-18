module.exports = {
    name: 'all',
    description: "command to @ everyone",
    async run(client, message, args){
        message.channel.send('@everyone You all are lame');
    
    }
}

//command to test @everyone
