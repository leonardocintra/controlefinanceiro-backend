const express = require('express')
const server = express()

server.get('/', function(req, res) {
    res.send('<h1> Index! </h1>')
})

server.all('/teste', function(req, res) {
    res.send('<h1> Index Teste! </h1>')
})

// qualquer url que conter "api" ele vai chamar, nao é um erro ter esquecido as aspas
server.get(/api/, function(req, res) {
    res.send('<h1> GET API! </h1>')
})


server.listen(3000, () => console.log('Executando...'))
