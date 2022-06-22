const { WAConnection } = require('@adiwajshing/baileys');

const fs = require('fs');

función asíncrona iniciar () {

        const client = new WAConnection()

        cliente.registrador.nivel = 'advertir'

        cliente.on('qr', () => {

        })

        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

        cliente.on('conectando', () => {

        console.log('Conectando')

        })

        cliente.on('abrir', () => {

        console.log('Conectado exitosamente :D')

        })

        esperar cliente.conectar({timeoutMs: 30*1000})

        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), nulo, '\t'))

        }

iniciar ()

.catch (err => console.log("unexpected error: " + err))
