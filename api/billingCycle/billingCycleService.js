const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/*
 new: true -> Apos dar um "PUT" ele retorna o objeto antigo novamente.
              com esse "true" ele pede para mostrar o novo objeto atualizado
 runValidators: true -> por padrão ele nao valida as regras (required, max, min) no PUT
*/
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if (error) {
            res.status(500).json({ errors: [error]})
        }
        else {
            res.json({ value })
        }
    })
})


module.exports = BillingCycle