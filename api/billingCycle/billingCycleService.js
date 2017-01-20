const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/*
 new: true -> Apos dar um "PUT" ele retorna o objeto antigo novamente.
              com esse "true" ele pede para mostrar o novo objeto atualizado
 runValidators: true -> por padrão ele nao valida as regras (required, max, min) no PUT
*/
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeResfulErrors) {
    const errors = []
    _.forIn(nodeResfulErrors, error => errors.push(error.message))
    return errors
}

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