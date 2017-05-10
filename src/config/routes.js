const express = require('express')

/* 
    O parametro server nessa function, é realmente  "server" (express) 
    que consta no arquivo server.js
*/
module.exports = function(server) {
    
    // API Routes 
    // Somente funcionará se tiver o /api/
    const router = express.Router()
    server.use('/api', router)

    // rotas da API - billingCycle
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    // rotas da API - billingSummary
    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}