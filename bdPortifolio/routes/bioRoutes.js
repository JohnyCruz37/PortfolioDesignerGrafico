const router = require('express').Router();
const Bio = require('../models/bio');

//criação bio
router.post('/', async (req, res) => {
    const {texto} = req.body;

    if(!texto){
        res.status(422).json({error:"Não foi adicionado nenhuma bio!"})
        return
    }

    const bio = {
        texto
    }

    try {
        await Bio.create(bio)
        res.status(201).json({msg: "Bio adicionada!"})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})

//atualização de dados
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const {texto} = req.body;

    const bio = {
        texto
    }

    try {
        const atualizaBio = await Bio.updateOne({_id: id}, bio);
        if(atualizaBio.matchedCount === 0){
            res.status(422).json({msg: 'Essa bio não existe'})
        }

        res.status(200).json({msg: "Atualizado com sucesso!"})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})

//mostra bio
router.get('/', async (req, res) => {
    try {
        const bio = await Bio.find()
        res.status(200).json(bio)
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})

//deletar bio
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const bio = await Bio.findOne({_id: id});

    if(!bio){
        res.status(422).json({msg: "essa bio nunca existiu!"})
        return
    }

    try {
        await Bio.deleteOne({_id: id})
        res.status(200).json({msg: 'bio removida'})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }


} )


module.exports = router;