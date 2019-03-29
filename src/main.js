import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuekeycloak from '@prodabel/vue-keycloak-adapter'

Vue.config.productionTip = false

Vue.use(vuekeycloak, { 
  store, 
  router, 
  permissions: { 'administrador': ['btnAdmin'] },
  backend_url: 'http://10.6.1.72:8888', 
  seconds_to_refresh: 30, 
  redirect_route: 'bar' 
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
