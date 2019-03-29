import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {path: '/primeira', component: require('./pages/pagina1.vue').default }, 
    {path: '/segunda', component: require('./pages/pagina2.vue').default }
]

Vue.use(VueRouter)

export default new VueRouter({
    routes
})
