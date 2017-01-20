const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma funcao middleware
function getSummary(req, res) {
    BillingCycle.aggregate({
        $project: {credit: { $sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credits"}, debt: {$sum: "$debt"} }
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, function(error, result) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            /* 
                Antentar ao _ (underline) que é o lodash
            primeiro tenta retornar do resulst. Caso for zerado, 
            ele seta o credito e debito zerados 
            */
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }
    })
}