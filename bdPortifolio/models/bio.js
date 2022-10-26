const mongoose = require('mongoose');

//tabela para bio
const Bio = mongoose.model('Bio',{
    texto: String
})

module.exports = Bio;