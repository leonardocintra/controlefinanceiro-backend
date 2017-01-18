const fs = require('fs')

// listar os arquivos desta pasta
const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))