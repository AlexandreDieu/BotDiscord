const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "go"){
        message.channel.send({files: ["./images/paysage.jpg"]});
    }
});
Client.on("messageDelete", message => {
    if (message.author.bot){
        message.channel.send({files: ["./images/paysage.jpg"]});
    }
});

Client.login(process.env.TOKEN);