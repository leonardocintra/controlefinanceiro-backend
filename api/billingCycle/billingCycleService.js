const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
/*
 new: true -> Apos dar um "PUT" ele retorna o objeto antigo novamente.
              com esse "true" ele pede para mostrar o novo objeto atualizado
 runValidators: true -> por padrão ele nao valida as regras (required, max, min) no PUT
*/
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle