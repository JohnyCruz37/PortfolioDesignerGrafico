const router = require('express').Router();
const Bio = require('../models/bio');

//criação bio
router.post('/', async (req, res) => {
    const texto = req.body;

    if(!texto){
        res.status(422).json({error:"Não foi adicionado nenhuma bio!"})
        return
    }

    const bio = {
        texto
    }

    try {
        await Bio.create(bio)
        res.status(201).json({msg: "Bio adicionada"})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
} )


module.exports = router;