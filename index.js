require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const express = require('express');  // Importar express para crear el servidor

const app = express();  // Crear una aplicación express
const port = process.env.PORT || 8080;  // Usar el puerto del entorno o 8080 como predeterminado

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

const prefix = "2b!";
client.commands = new Collection();

// Cargar y registrar comandos automáticamente
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const CommandClass = require(`./commands/${file}`);
    const commandInstance = new CommandClass();
    client.commands.set(commandInstance.name, commandInstance);
}

client.on('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
    client.user.setPresence('2b!help', { type: CustomStateSet});//Funcion de estado(?
});

// Escuchar mensajes para comandos
client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send('Ocurrió un error al ejecutar el comando.');
    }
});

// Iniciar sesión en Discord con el token del entorno
client.login(process.env.DISCORD_TOKEN);

// Crear un endpoint en express para mantener el servidor activo
app.get('/', (req, res) => {
    res.send('Bot está activo y funcionando!');
});

// Hacer que express escuche en el puerto configurado
app.listen(port, () => {
    console.log(`Servidor web escuchando en el puerto ${port}`);
});