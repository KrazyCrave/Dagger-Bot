module.exports = {
    name: 'attack',
    description: "basic line for attacking", 
    //command will go d!attack (user they want to attack)
    execute(message, args){
        message.channel.send('<@322926463101960192> has attacked <@322926463101960192> with a Dagger dealing 3 hp');
    
    }
}
