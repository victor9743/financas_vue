
var orcamento = require('../models/db.DAO');
class indexController {

    constructor(){
        this.dados = [];
    }

    async index(req, res){  

        try {
            var listarOrcamento = await orcamento.listarOrcamento();

            res.json(listarOrcamento);
    
            
        } catch (error) {
            
            console.log(error);
        }
    }

    async indexById(req, res){

        try {
            var listarporId = await orcamento.listarporId(req.params.id);

            res.json(listarporId);
        } catch (error) {
            console.log(error);
        }

    }

    async inserir(req, res){

        this.dados = req.body;

    
        try {
            var inserirOrcamento = await orcamento.inserirOrcamento(dados);

            res.json(inserirOrcamento);;
        } catch (error) {
            
            console.log("deu ruim")
        }
        
    }
    async editar(req, res){
        this.dados = req.body;
        var id = req.params.id;

        try {
            var result = await orcamento.editarOrcamento(id, dados);

            res.json(result);
        } catch (error) {
            
            console.log(error);
        }
    }

    async remover(req, res){

        var id = req.params.id;

       try {
            
            var result = await orcamento.removerOrcamento(id);

            res.json(result);

       } catch (error) {
           
       }
    }



}

module.exports = new indexController();