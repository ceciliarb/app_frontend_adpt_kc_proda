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
    seconds_to_refresh: 10,
    verbose: true,
    // authorize_disabled: true,    // realiza redirecionamentos e controle de permissao nas rotas automaticamente
    // autorefresh_disabled: true,  // realiza o refresh do token automatimente de seconds_to_refresh a seconds_to_refresh
    options: { 
        // as opcoes onLoad e checkLoginIframe so serao consideradas se authorize_disabled: true (default ehh false)
        // caso contrario, serao setadas com o valor null e false, respectivamente
        // a opcao promiseType eh sempre setada internamente com o valor 'native'
        // onLoad: 'check-sso', 
        // checkLoginIframe: false,
        redirectUri: window.location.protocol + '//' + window.location.host + window.location.pathname 
    },
    optionsConst: window.location.protocol + '//' + window.location.host + '/keycloak.json', 
    // se backend_url e userinfo_endpoint forem setadas com valores validos, o adapter recuperara 
    // informacoes do usuario vindas do backend, de seconds_to_refresh a seconds_to_refresh
    // backend_url: 'http://localhost:8080',
    // userinfo_endpoint: 'userinfo',
    permissions: {
        'GERENTE': ['home'],
        'guest': ['teste2'],
        'any': ['inicio', '403', '404'],
        'logged': ['home', 'teste1']
    },
    // callback chamada quando ha falha para recuperar token do keycloak no processo de login
    // authErrorCallback: () => { window.location.href = 'http://www.google.com' },
    // callback chamada quando ha falha para atualizar o token, utilizando um refresh token
    // refreshErrorCallback: () => store.dispatch('LOGOUT_REQUEST'),
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
