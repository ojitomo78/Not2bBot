const Command = require('./Command');

class SayCommand extends Command {
    constructor() {
        super('say', 'El bot repetirá el texto que escribas y borrará tu mensaje.');
    }

    async execute(message, args) {
        const text = args.join(' ');
        if (!text) {
            return message.channel.send('Por favor, escribe algo para que lo repita.');
        }
        await message.delete();
        message.channel.send(text);
    }
}

module.exports = SayCommand;