const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "Ws"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Hii.
`,'https://www.twitch.tv/By:A7MD');
  console.log('لقد تعلمت أن هناك شيئا بنّاء يأتي من كل هزيمة');
});


if (message.content.startsWith('Ws')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("228139766573432832")
   message.channel.send(`${argresult} \` `)
}
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);
