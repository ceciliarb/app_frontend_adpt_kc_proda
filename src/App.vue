<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <p>Bem vindo,{{nome}}</p>
    <ul>
      <li><router-link to="/primeira">Página primeira</router-link></li>
      <li><router-link to="/segunda">Página segunda</router-link></li>
      <li><a @click.prevent="logout" href="#">Logout</a></li>
    </ul>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    logado() {
      return !!(this.$store.getters.token)
    },
    nome() {
      return this.$store.getters.user.name
    },
    msg() {
        return this.logado ? 'Você está logado' : 'Você ainda não realizou login'
    }
  }, 
  methods: {
     logout() {
             this.$store.dispatch('LOGOUT_REQUEST')
     },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
