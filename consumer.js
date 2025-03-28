'use strict'

const amqp = require('amqplib')
const queue = 'cola3'

function intensiveOperation() {
    let i = 1e3
    while (i--) {}
}

async function subscriber() {
    const connection = await amqp.connect('amqp://guest:guest@10.6.101.93')
    const channel = await connection.createChannel()

    await channel.assertQueue(queue)

    channel.consume(queue, (message) => {
        

        intensiveOperation()

        console.log(`Mensaje recibido desde "${queue}"`)
        console.log(message.content.toString())

        channel.ack(message)
    })
}

subscriber().catch((error) => {
    console.error(error)
    process.exit(1)
})