<template>
  <div>

    <div>


      <h1>Entradas</h1>
      <h3 id="entrada" ></h3>

      <h1>Saidas</h1>
      <h3 id="saidas"></h3>

      <h1>Saldo</h1>
      <h3 id="saldo"></h3>


    </div>


    <div class="container" id="campo_tabela">
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
                <th>#</th>
                <th>descricao</th>
                <th>data</th>
                <th>Valor</th>
                <th>Opções</th>
          </thead>
          <tbody v-for="(x, index) in financas" :key="x.id">
            <td>{{index +1 }}</td>
            <td>{{ x.descricao}}</td>
            <td>{{ x.data_financa }}</td>
            <td>{{ x.valor }}</td>
            <td>
              <button @click="editarModel(x.id_financa)">Editar</button>
              <button @click="remover(x.id_financa)">Remover</button>
            </td>
              
              
          </tbody>

      </table>
      <div id="parte_btn_cadastrar">
          <button class="button is-success" @click="mostrarModalCadastrar">Cadastrar</button>
      </div>
      

    </div>

    <!-- Cadastrar -->

    <div :class="{modal: true, 'is-active': showModal}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Cadastrar Finança</p>
          <button class="delete" aria-label="close" @click="fecharModalCadastrar"></button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">Descrição</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Informe a Descrição" v-model="descricao">
                </div>

                 <label class="label">Data Finança</label>
                <div class="control">
                  <input class="input" type="date" value="2021-07-21" v-model="data">
                </div>

                 <label class="label">Valor</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Informe o Valor" v-model="valor">
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="registrar">Cadastrar</button>
          <button class="button" @click="fecharModalCadastrar">Cancel</button>
        </footer>
      </div>
    </div>

    <!-- Editar -->

    <div :class="{modal: true, 'is-active': showModal1}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editar Finança</p>
          <button class="delete" aria-label="close" @click="fecharModalEditar"></button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">Descrição</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Informe a Descrição" v-model="descricao">
                </div>

                 <label class="label">Data Finança</label>
                <div class="control">
                  <input class="input" type="date" value="2021-07-21" v-model="data">
                </div>

                 <label class="label">Valor</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Informe o Valor" v-model="valor">
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="atualizar">Atualizar</button>
          <button class="button" @click="fecharModalEditar">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
  

</template>

<script>
import axios from 'axios'

export default{

  //  componente é carregado assim que a página é carregada
  created(){
    axios.get("http://localhost:3000").then(res=>{

      this.financas = res.data;
      console.log(this.financas);
     
    }).catch(err=>{

      console.log(err);
    })
  },
  data(){

    return {
      financas:[],
      showModal: false,
      showModal1: false,
      descricao: '',
      data: '',
      valor: '',
      mensagem: '',
      ediId: ''
    }

  },
  methods:{

    registrar(){

        axios.post("http://localhost:3000",{
          descricao: this.descricao,
          data_financa: this.data,
          valor: this.valor
        }).then(res=>{

          console.log(res);
          
        document.location.reload(true);

        }).catch(err =>{

          console.log(err);
        })
    },

    editarModel(value){

      this.ediId = value
      this.showModal1 = true;

    },
    atualizar(){

      console.log(this.ediId);
      console.log(this.descricao);
      console.log(this.data);
      console.log(this.valor);
      
      axios.put("http://localhost:3000/" +this.ediId,{

        descricao : this.descricao,
        data_financa : this.data,
        valor : this.valor

      }).then(res=>{

        console.log(res);
        document.location.reload(true);

      }).catch(err =>{
        console.log(err);

      })

      
       this.showModal1 = false;

    },

    remover(value){

      var id = value;

      axios.delete("http://localhost:3000/"+ id).then(res=>{

        console.log(res);
        document.location.reload(true);
      }
      ).catch(err =>{
        console.log(err);
      })

    },
    mostrarModalCadastrar(){
      this.showModal = true;
    },
    fecharModalCadastrar(){
      this.showModal = false;
    },
    mostrarModalEditar(){
      this.showModal1 = true;
    },
    fecharModalEditar(){
      this.showModal1 = false;
    }
  


  }

}

</script>

<style>


#parte_superior{

  height: 200px;
  text-align: center;
 

}
#texto_sup{
   font-size: 64px;
    padding-top: 50px;
    color: white;
   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
#campo_tabela{
  margin-top: 70px;
  text-align: center;
}
#parte_btn_cadastrar{
  text-align: right;
}


</style>
