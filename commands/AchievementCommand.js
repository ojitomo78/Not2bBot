const { EmbedBuilder } = require('discord.js');
const Command = require('./Command');

class AchievementCommand extends Command {
    constructor() {
        super('logro', 'Crea un logro con título, descripción y emoji opcional.');
    }

    execute(message, args) {
        const logroArgs = message.content.slice('2b!logro'.length).trim().split(' +');

        if (logroArgs.length < 1) {
            return message.channel.send('Por favor, usa el formato: `2b!logro Título +Descripción [+Emoji]`');
        }

        const title = logroArgs[0].trim();
        const description = logroArgs[1] ? logroArgs[1].trim() : '';
        let emoji = logroArgs[2] ? logroArgs[2].trim() : '';

        if (emoji.startsWith('<:') && emoji.endsWith('>')) {
            const emojiId = emoji.match(/<:.*:(\d+)>/);
            if (emojiId) {
                emoji = `https://cdn.discordapp.com/emojis/${emojiId[1]}.png`;
            }
        } else if (emoji && !emoji.match(/^[\u{1F300}-\u{1FAF6}\u{1F600}-\u{1F64F}\u{2600}-\u{26FF}]+$/u)) {
            return message.channel.send('El emoji proporcionado no es válido.');
        }

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const embed = new EmbedBuilder()
            .setColor(`#${randomColor}`)
            .setTitle(title)
            .setDescription(description)
            .setFooter({ text: '¡Felicidades por tu logro!' });

        if (emoji.startsWith('http')) {
            embed.setThumbnail(emoji);
        } else if (emoji) {
            embed.setTitle(`${emoji} ${title}`);
        }

        message.channel.send({ embeds: [embed] });
    }
}

module.exports = AchievementCommand;