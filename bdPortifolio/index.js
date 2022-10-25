//configuração inicial pacotes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//inicializa o express
const app = express();
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});


//Leitura de JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

//Rotas da API

//ROTAS PARA FORMAÇÕES
const formacaoRotas = require('./routes/formacaoRoutes');
app.use("/formacao", formacaoRotas);

// //ROTAS PARA POSTAGEM
const postagemRotas = require('./routes/postagemRoutes');
app.use("/postagem", postagemRotas);

//Rota da bio
const bioRotas = require('./routes/bioRoutes');
app.use('/bio', bioRotas );

//endpoint (rotas)
app.get('/', (req, res) => {
    res.json({msg: "funcionando"})
});

//conecção com banco de dados

mongoose.connect('mongodb+srv://JohnyCruz:JohnyCruz@apidesignergrafico.tfmtgpe.mongodb.net/portfoliodesignergrafico?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000)
    console.log("conectamos ao banco de dados")
})
.catch((err)=>console.log(err));

