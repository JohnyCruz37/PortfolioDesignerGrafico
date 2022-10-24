const mongoose = require('mongoose');

const Postagem = mongoose.model('Postagem',{

    titulo: String,
    detalhes: String,
    tecnologia: String,
    nome: String,
    chave: String,
    url: String,
    tamanho: Number, 
    createAt: {
        type: Date,
        default: Date.now,
    },
    curtida: Boolean,

})

module.exports = Postagem;