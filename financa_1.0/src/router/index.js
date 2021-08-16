import Vue from 'vue'
import VueRouter from 'vue-router'
import cadastrar from '../views/cadastrar.vue'



Vue.use(VueRouter)

const routes = [
 
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: cadastrar
  }
]

const router = new VueRouter({
  routes
})

export default router
