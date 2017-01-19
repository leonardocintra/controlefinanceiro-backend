const express = require('express')

/* O parametro server nessa function, é realmente  "server" (express) que consta no arquivo server.js
*/
module.exports = function(server) {
    
    // API Routes - Somente funciona se tiver o /api/
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}