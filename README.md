# Not2bBot

Un bot de Discord diseñado para ayudarte con diversas funciones y comandos personalizados. 

## Características

- Responde a comandos con el prefijo `2b!`.
- Personalización de comandos desde el archivo principal o la carpeta de comandos.
- Muestra un mensaje de estado con el comando principal `2b!help`.

## Requisitos

Antes de empezar, asegúrate de tener los siguientes requisitos instalados:

- [Node.js](https://nodejs.org/) versión 16 o superior.
- [Discord.js](https://discord.js.org/) instalado en el proyecto.
- Una cuenta en [Discord Developer Portal](https://discord.com/developers/applications) para obtener un token.

## Configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/<tuusuario>/Not2bBot.git
   ```
2. Instala las dependencias:

    ```bash
    npm install
    ```
3. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

    ```bash
    DISCORD_TOKEN=TU_TOKEN_DEL_BOT
    ```
4. Ejecuta el bot localmente:

    ```bash
    node index.js
    ```

## Despliegue en Railway

Este bot está configurado para ejecutarse en Railway. Para desplegarlo:

1. Conecta tu repositorio a [Railway](https://railway.app/).
2. Configura las variables de entorno (`DISCORD_TOKEN`).
3. Despliega el proyecto y obtén la URL pública para mantenerlo activo.

## Contribuir

Si quieres contribuir al desarrollo de este bot:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```sh
   git checkout -b feature/nueva-funcion
   ```
3. Realiza tus cambios y haz un commit:
    ```sh
    git commit -m "Agrega nueva funcionalidad"
    ```
4. Haz un push a tu rama:
    ```sh
    git push origin feature/nueva-funcion
    ```
5. Crea un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

---

¡Gracias por usar Not2bBot! Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme.
