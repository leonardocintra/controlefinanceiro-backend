module.exports = function(req, res, next) {
    // Aqui é todos os enderecos que podem chamar.
    res.header('Access-Control-Allow-Origin', '*'),
    // Quais verbos a aplicação vai permitir
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'),
    // Tipos de headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    next()
}