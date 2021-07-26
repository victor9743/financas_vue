var knex = require ('../models/db');

class dbDAO {

    async listarOrcamento(){
        try {
            
            var result = await knex.select().table('financa');

            return result;

        } catch (error) {
            
            console.log(error);
        }
    }
    async listarporId(id){
        
        try {

            var result = await knex.select().where({ id_financa : id}).table('financa');

            return result;

        } catch (error) {
            
        }

    }

    async inserirOrcamento(dados){
       

       await knex.insert(dados).table("financa");

       return { status: true, msg : 'Usuário Cadastrado com Sucesso!'}
        

    }

    async editarOrcamento(id, dados){


        try {
            
            var result = await knex.update(dados).where({ id_financa : id}).table('financa');
            
            return result;

   

        } catch (error) {
            
            console.log(error);
        }

    }
    async removerOrcamento(id){
       

        try {
            
            var result = await knex.delete().where({id_financa: id}).table('financa');
            
            if(result == 1){
                return {msg: "Usuario removido com sucesso"};

            }else{
                return {msg: "Erro"};
            }

        } catch (error) {
            
        }

    
    }
    async valorTotal(){
        try {
            
            var result = await knex.select({sum : valor}).table('financa');

            return result;

        } catch (error) {
            
            return error;
        }
    }



}

module.exports = new dbDAO();