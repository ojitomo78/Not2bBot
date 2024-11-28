class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    execute(message, args) {
        throw new Error('El método execute debe ser implementado en las clases derivadas.');
    }
}

module.exports = Command;