const express = require('express')
const app = express()
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 3001 })

let clients = []

// Express server
app.use('/static', express.static(__dirname + '/client/build/static'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(3000, () => {
  console.log('Express server is working on port 3000')
})

// WebSocket server
server.on('connection', ws => {
  clients.push(ws)
  console.log(`Connected, ${clients.length} users online`)

  ws.on('close', () => {
    clients.splice(clients.indexOf(ws), 1)
    console.log(`Disconnected, ${clients.length} users online`)
  })
  ws.on('message', msg => {
    for (let i of server.clients) {
      i.send(msg)
    }
  })
})