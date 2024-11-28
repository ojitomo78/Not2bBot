const Command = require('./Command');

class CalculateCommand extends Command {
    constructor() {
        super('calcular', 'Resuelve una operación matemática.');
    }

    execute(message, args) {
        try {
            const calculation = args.join(' ');
            const result = eval(calculation);
            message.channel.send(`El resultado de \`${calculation}\` es: **${result}**`);
        } catch (error) {
            message.channel.send('Hubo un error al realizar el cálculo. Asegúrate de que la operación sea válida.');
        }
    }
}

module.exports = CalculateCommand;