const { WAConnection } = require('@adiwajshing/baileys');

const fs = require('fs');

función asíncrona iniciar () {

        const client = new WAConnection()

        cliente.registrador.nivel = 'advertir'

        cliente.on('qr', () => {

        })

        fs.existsSync('./Bot-PePe1.2.json') && client.loadAuthInfo('./Bot-PePe1.2.json')

        cliente.on('conectando', () => {

        console.log('Conectando')

        })

        cliente.on('abrir', () => {

        console.log('Conectado exitosamente :D')

        })

        esperar cliente.conectar({timeoutMs: 30*1000})

        fs.writeFileSync('./Bot-PePe1.2json', JSON.stringify(client.base64EncodedAuthInfo(), nulo, '\t'))

        }

iniciar ()

.catch (err => console.log("unexpected error: " + err))
