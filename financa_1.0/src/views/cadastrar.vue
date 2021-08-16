<template>
    <div>
        <div :class="{modal: true , 'is-active': visivel}" style="margin-top:-150px">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Cadastrar Finança</p>
                    <button class="delete" @click="close" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        
                        <div class="column is-four-fifths">
                            <p style="margin-bottom:5px; ">Descrição</p>
                            <input class="input" type="text" v-model="financa_desc" placeholder="Descrição da Finança" >

                        </div>
                        
                        <div class="column is-half ">

                            <p style="margin-bottom:5px;">Data</p>
                            <input class="input" type="date" v-model="data_financa">

                        </div>

                        <div class="column is-one-third">
                            <p style="margin-bottom:5px; ">Valor</p>
                            <input class="input" type="number" v-model="valor" placeholder="0,00">

                        </div>

                         
                        
                    </section>
                    <footer class="modal-card-foot" style="padding-left: 430px">
                    
                    <button class="button" @click="close" style="margin-right: 12px">Fechar</button>
                    <button class="button is-success" @click="cadastrar">Cadastrar</button>
                    </footer>
                </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    data(){

        return{
            visivel : true,
            financa_desc: '',
            data_financa: '',
            valor: '',
            mensagem: ''
        }
    },
    methods:{
        close(){
            this.visivel = false;

            window.location.href = "/";
        },
        cadastrar(){

            var descricao = this.financa_desc;
            var data_value = this.data_financa;
            var valor_financa = this.valor;

            // inserindo valores no banco de acordo com os seus respectivos campos
            axios.post("http://localhost:3000",{
                descricao: descricao,
                data_financa: data_value,
                valor: valor_financa
            
            }).then(res=>{
                console.log(res);
                
                
                this.visivel = false;
                 window.location.href = "/";

                
            }).catch(err=>{
                console.log(err);
            })
            
        },


    }
}
</script>
<style scoped>
    #campos{
        margin-top: 30px;
        margin-bottom: 10px;
    }
</style>