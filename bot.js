const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

//j'aurai pu faire la fonction de commande autrement comme par exemple
//en ignorant tout les messages ne commancant pas par '!', mais vu que j'y
//avais pas pensé j'ai fait autrement lol

//ready dans la console nice yes
client.once('ready', () => {
	console.log('start');
});

// le bot se connecte à discord avec le tocken de l'app
client.login(token);

// tout les messsages apparaissent dans la console, et c'est cool
client.on('message', message => {
	console.log(message.content);
});

//La commande !reverse permet d'inverser l'ordre des lettres d'un message envoyé par quelqu'un
//création de la fonction reverseString (j'ai mis 1/2h à pondre cette merde lol)
function reverseString(str) {
	//decoupe le string en arrays
    var splitString = str.split("");
	//inverse l'ordre des arrays dans le tableau splitString
    var reverseArray = splitString.reverse();
	//recrée un string depuis reverseArray
    var joinArray = reverseArray.join("");
    return joinArray; //  ez
}

//Les argument et les commandes (enfin ptn)
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

	//test le bot. (btw je suis resté genre 20 minutes à cause d'une faute de syntaxe juste là)
	if (command === 'test') {
    message.channel.send('still working.');
  }
  //display le nombre de membres
  else if (command === 'server') {
  	message.channel.send(`Nombre total de membres: ${message.guild.memberCount}`);
  }
//!avatar [@user#0000] permet d'afficher la photo de profil discord d'une personne ping
	else if (command === 'avatar') {
  	if (!message.mentions.users.size) {
    	return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
  }
	const avatarLink = message.mentions.users.map(user => {
  	return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
 });
	message.channel.send(avatarLink);
}
//!reverse expliqué plus haut
	else if (command === 'reverse') {
  	if (!args.length) {
      return message.channel.send(`${message.author} t'es con ou quoi ?`);
  }
    var yess = message.content.slice(8);
		console.log(yess);
    return message.channel.send(reverseString(yess))
  }
	//je me link lol
  else if (command === 'creator') {
    if (!args.length) {
      return message.channel.send(`les fichiers du bots sont dispo sur mon github héhé : https://github.com/LpAnto/BipBoup-Useless-bot`);
    }
  }
//petit !help
	else if (command === 'helpp') {
  	if (!args.length) {
    	return message.channel.send(`Voici les differentes commandes :\n!test\n!server\n!avatar\n!reverse\n!creator`);
  	}
	}
});

//zgeg
