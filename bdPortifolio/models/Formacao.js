const mongoose = require('mongoose');

//criar tabela de dados no banco de dados
const Formacao = mongoose.model('Formacao', {

        nivel: String,
        situacao: String,
        instituicao: String,
        curso: String,
        inicio: String,
        conclusao: String,                
        tema: String,
        temaUrl: String


})

module.exports = Formacao;
