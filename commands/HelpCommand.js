const { EmbedBuilder } = require('discord.js');
const Command = require('./Command');

class HelpCommand extends Command {
    constructor() {
        super('help', 'Muestra los comandos disponibles.');
    }

    execute(message) {
        const helpEmbed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('Ayuda - Comandos Disponibles')
            .setDescription('Aquí tienes los comandos disponibles:')
            .addFields(
                { name: '2b!say [texto]', value: 'El bot repetirá el texto que escribas y borrará tu mensaje.' },
                { name: '2b!calcular [operación]', value: 'Resuelve una operación matemática (por ejemplo: 5+5).' },
                { name: '2b!dado', value: 'Lanza un dado de 20 caras y muestra el resultado.' },
                { name: '2b!moneda', value: 'Lanza una moneda y muestra el resultado (Cara o Sello).' },
                { name: '2b!logro +Título +Descripción [+Emoji]', value: 'Crea un logro en estilo embed. El emoji es opcional.' }
            )
            .setFooter({ text: 'Bot creado por Ojitomo (Viilla)' });

        message.channel.send({ embeds: [helpEmbed] });
    }
}

module.exports = HelpCommand;