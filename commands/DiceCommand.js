const Command = require('./Command');

class DiceCommand extends Command {
    constructor() {
        super('dado', 'Lanza un dado de 20 caras y muestra el resultado.');
    }

    execute(message) {
        const roll = Math.floor(Math.random() * 20) + 1;
        message.channel.send(`🎲 Has lanzado el dado y salió un **${roll}**.`);
    }
}

module.exports = DiceCommand;