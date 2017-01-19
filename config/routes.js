const express = require('express')

/* O parametro server nessa function, é realmente  "server" (express) que consta no arquivo server.js
*/
module.exports = function(server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)
}