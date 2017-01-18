const _ = require('lodash');

const alunos = [{
    nome: 'Joao',
    nota: 7.6
}, {
    nome: 'Maria',
    nota: 8.9
}, {
    nome: 'Leonardo',
    nota: 10
}]

const media = _.sumBy(alunos, 'nota') / alunos.length;
console.log(media)