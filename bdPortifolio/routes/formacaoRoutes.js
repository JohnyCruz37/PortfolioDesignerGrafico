const router = require('express').Router()
const Formacao = require('../models/Formacao');


//criação ou postagem de dados
router.post('/', async (req, res) => {

    //Tratar os dados do body da requisição
    const {nivel, situacao, instituicao, curso, inicio, conclusao, tema, temaUrl} = req.body;

    //campos não informados ou não preenchidos CAMPOS OBRIGATÓRIOS
    if(!nivel){
        res.status(422).json({error: "Escolha em qual nível está o seus estudos."})
    };
    if(!situacao){
        res.status(422).json({error: "Precisamos saber se ainda está cursando ou se já concluiu."})
    };
    if(!instituicao){
        res.status(422).json({error: "Em qual instituição de ensino você está estudando?"})
    }
    if(!curso){
        res.status(422).json({error: "Qual curso está fazendo agora?"})
    }
    if(!inicio){
        res.status(422).json({error: "Eai? Quando iniciou o seu curso?"})
    }
    if(!conclusao){
        res.status(422).json({error: "Caso ainda esteja cursando, informe uma data de previsão de conclusão."})
    }
    

    const formacao = {
            nivel,
            situacao,
            instituicao,
            curso,
            inicio,
            conclusao,
            tema,
            temaUrl
    }

    try {
        await Formacao.create(formacao)
        res.status(201).json({msg: "Formação adicionada com sucesso!! Parabéns por mais essa conquista!"})
    } catch (error) {
        res.status(500).json({error:error})
        return
    }

})

//Leitura de todos dados
router.get('/', async (req, res) => {
    try {
        const formacoes = await Formacao.find()
        res.status(200).json(formacoes)
    } catch (error) {
        res.status(500).json({error:error})
        return
    }

})

//Leitura de dados especificos
router.get('/:id', async (req, res) => {
    try {
        //extrair dado da requisição que está na URL
        const id = req.params.id

        // no primeiro dado está a categoria do item por exemplo "nome". o segundo dado é a informação que deve ser encontrada nesse campo no banco de dados. Por exemplo: se quer encontrar por nome João e ele tem como campo "usuario", então no primeiro dado coloque "usuario" e na url de requisição adicione "/João"
        // se quer que retorne apenas um valor use findOne() se quiser vários valores utilize find()
        const filtro = await Formacao.find({status: id}) 
        if(!filtro) {
            res.status(422).json({msg: "Nenhuma informação para " + req.params.id})
            return
        }

    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})

//atualização de dados
router.patch('/:id', async (req, res) => {
    //pegar o id da requisição antes de alterar algum dado
    const id = req.params.id;

    //informa os campos do banco de dados onde está a informação que vai ser alterada
    const {nivel, status, instituicao, curso, inicio, conclusao, tema, temaUrl} = req.body;

    //recria o objeto
    const formacao = {
        nivel,
        situacao,
        instituicao,
        curso,
        inicio,
        conclusao,
        tema,
        temaUrl

    }

    try {
        //atualiza o id informado com o novo objeto formacao
        const atualizaDado = await Formacao.updateOne({_id: id}, formacao);
        
        //condicional para saber se o usuario existe no banco de dados antes de fazer atualização
        if(atualizaDado.matchedCount === 0){
            res.status(422).json({msg: "Usuário não encontrado!"})
            return
        }
        res.status(200).json({msg:"Dados atualizados com sucesso!!"})
        
    } catch (error) {
        res.status(500).json({error:error})
        return
    }

})

//deletar formação
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    //encontrar um id especifico
    const formacao = await Formacao.findOne({_id: id});

    //confirma se o id existe no banco de dados
    if(!formacao) {
        res.status(422).json({msg: "Formação não encontrada!"})
        return
    }

    try {
        //deletado o id encontrado
        await Formacao.deleteOne({_id: id})

        res.status(200).json({msg:"Formação removida com sucesso!"})

    } catch (error) {
        res.status(500).json({error:error})
        return
    }

})

module.exports = router;
