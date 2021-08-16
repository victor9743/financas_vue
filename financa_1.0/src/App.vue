<template>
  <div id="app" @load="calctotal()">;
    <div>
     
    </div>
    <div class="table-container" style="border: 1px solid red; margin-top:100px">
    <table class="table is-bordered is-striped container" id="tabela">

      <thead>
            <th>#</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Opções</th>
      </thead>
      <tbody v-for="(x, index) in financas" :key="x.id" >

      
          <td>{{ index +1 }}</td>
          <td>{{ x.descricao }}</td>
          <td>{{ x.data_financa }}</td>
          <td>{{ x.valor }}</td>
          <td>
            <button @click="editar(x.id_financa)" class="button is-info is-outlined" style="margin-right:15px">Editar</button>
            <button @click="remover(x.id_financa)" to="/" class="button is-danger is-outlined">Remover</button>
          </td>
      

      </tbody>

    </table>
    <div style="text-align: right;" class="container">
      <router-link to='/cadastrar' class="button is-primary is-outlined">Cadastrar</router-link>
    
    </div>
   
    </div>
   
    
    <!-- renderiza as views -->
    <router-view/> 



    <!-- Editar -->

    <div :class="{modal: true , 'is-active': visivel}" style="margin-top:-150px">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Editar Finança</p>
                    <button class="delete" @click="close" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        
                        <div class="column is-four-fifths">
                            <p style="margin-bottom:5px; ">Descrição</p>
                            <input class="input" type="text" v-model="desc_edit" placeholder="Descrição da Finança" >

                        </div>
                        
                        <div class="column is-half ">

                            <p style="margin-bottom:5px;">Data</p>
                            <input class="input" type="date" v-model="data_edit">

                        </div>

                        <div class="column is-one-third">
                            <p style="margin-bottom:5px; ">Valor</p>
                            <input class="input" type="number" v-model="valor_edit" placeholder="0,00">

                        </div>

                         
                        
                    </section>
                    <footer class="modal-card-foot" style="padding-left: 430px">
                    
                    <button class="button" @click="close" style="margin-right: 12px">Fechar</button>
                    <button class="button is-success" @click="editar_financa">Cadastrar</button>
                    </footer>
                </div>
            </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // executa funcionalidade assim que a página é carregada
    created(){
        
        axios.get("http://localhost:3000").then(res =>{

            this.financas = res.data;
            console.log(this.financas.valor);
         

        }).catch(err=>{
          console.log(err);
        })
        


    },
    data(){
      return{
        financas: [],
        desc_edit: '',
        data_edit: '',
        valor_edit:'',
        visivel: false,
        total: '',
        EditId: -1
        
      }
    },
    methods:{

        calcTotal(){
            console.log(this.financas.data[0].valor);

        },
      
        close(){
            this.visivel = false;

            window.location.href = "/";
        },
        editar(valor){
         this.EditId = valor;
          this.visivel = true;

        },
        editar_financa(){

          axios.put("http://localhost:3000/" +this.EditId,{
            descricao: this.desc_edit,
            data_financa: this.data_edit,
            valor : this.valor_edit
          }).then(()=>{
              window.location.href = '/';
          }).catch(err=>{
            console.log(err);
          })

        },
        remover(value){
          var id = value;

          axios.delete("http://localhost:3000/"+ id).then(res=>{
            
            console.log(res);
            window.location.href = '/';
          
          }).catch(err=>{
            console.log(err);
          })
        },
       
    }
}
</script>

<style>
#tabela{
  width: 80%;
  text-align: center;
}
</style>
