module.exports = {
    name: 'ping',
    description: "this is a ping command",
    
    async run(client, message, args){
        message.channel.send('pong!');
    
    }
}
