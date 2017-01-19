const express = require('express')
const server = express()

server.get('/', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...')
})


server.get('/', function(req, res) {
    console.log('respondendo...')
    res.send('<h1> Te repondi fdṕ! </h1>')
})


server.listen(3000, () => console.log('Executando...'))
