const Command = require('./Command');

class CoinCommand extends Command {
    constructor() {
        super('moneda', 'Lanza una moneda y muestra el resultado.');
    }

    execute(message) {
        const flip = Math.random() < 0.5 ? 'Cara' : 'Sello';
        message.channel.send(`🪙 La moneda cayó en: **${flip}**.`);
    }
}

module.exports = CoinCommand;