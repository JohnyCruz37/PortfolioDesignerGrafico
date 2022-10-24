const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const Postagem = require("../models/Postagem");

//Criação de Postagem
router.post('/', multer(multerConfig).single('file') , async (req, res) =>{

    //body da requisição
    const { titulo, detalhes, tecnologia, imagem, curtida} = req.body;
    const {nome, chave, url, tamanho} = imagem;


    const postagem = {
        titulo,
        detalhes,
        tecnologia,
        imagem{
            nome, 
            chave, 
            url,
            tamanho,
        },
        curtida,

    }
    
    
   
    

    try {
        await Postagem.create(postagem)
        res.status(201).json({msg: "Belo trabalho!"})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})



//Leitura das postagens
router.get('/',async(req, res)=>{
    try {
        const postagem = await Postagem.find()
        res.status(200).json(postagem)
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})


module.exports= router;

//Leitura de uma postagem específica
// router.get('/:id', async (req, res) => {

//     try {
//         //extrair dado da URL
//         const id = req.params.id

//         const filtro = await Postagem.findOne({_id: id})
//         if(!filtro){
//             res.status(422).json({msg: "Nenhuma informação para" + req.params.id})
//             return
//         }
        
//     } catch (error) {
//         res.status(500).json({error:error})
//         return
//     }

// })

// //detelar postagem
// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;

//     const postagem = await Postagem.findOne({_id: id});

//     if(!postagem) {
//         res.status(422).json({msg: "Essa postagem não foi encontrada"})
//         return
//     }

//     try {
//         await Postagem.deleteOne({_id: id})

//         res.status(200).json({msg: "Postagem apagada com sucesso!!"})
//     } catch (error) {
//         res.status(500).json({error:error})
//         return
        
//     }

// } )




