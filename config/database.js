const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/db_finance')

// Tradução dos erros de forma GLOBAL
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo permitido de '{MIN}.'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo permitido de '{MAX}.'"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'"
