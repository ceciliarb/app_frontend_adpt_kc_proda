// descomentar apenas para apps Laravel (fullstack)
// (nesse arquivo o token CSRF eh inserido nos headers padrao do axios)
require('./bootstrap');

/**
 * Arquivo JavaScript principal.
 * A partir daqui são incluídas todas as dependências.
 */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

import Pbh from '@prodabel/piweb-lib-vue';
// descomentar a linha abaixo para habilitar o login
import keycloak from '@prodabel/vue-keycloak-adapter';

import router from './routes';
import store from './stores';
import helpers from './helpers';
import filters from './filters';
import Root from './pages/paginaRaiz.vue';

Vue.use(BootstrapVue)
Vue.use(Pbh, {
    merge: {
        filters,
        helpers
    }
});

router.onError((err) => {
    if(err.toString().includes('403')) {
        router.push('403')
    }
})

// descomentar a linha abaixo para habilitar o login
Vue.use(keycloak, {
    router, 
    store, 
    seconds_to_refresh: -1,
    verbose: true,
    permissions: {
        'GERENTE': ['home', 'teste1'],
        'guest': ['teste2'],
        'any': ['inicio', '403', '404']
    },
});

new Vue({
    data() {
        return {
            carregando: false,
        }
    },
    store,
    router,
    render: h => h(Root),
}).$mount('#app')
