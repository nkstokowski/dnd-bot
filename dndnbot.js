const Discord = require("discord.js");
const DiceRoller = require("./DiceRoller");
const Character = require("./Character");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix)) {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    switch(cmd) {
      case 'roll':
      case 'r':
        message.channel.send(DiceRoller.rollDie(args));
        break;
      case 'id':
        message.channel.send(message.author.id);
        break;
      case 'character':
      case 'c':
      case 'char':
        message.channel.send(Character.printCharacter(args, message.author.id));
        break;
    }
  }
});

client.login(config.token);