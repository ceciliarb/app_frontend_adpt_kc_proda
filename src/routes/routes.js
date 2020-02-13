//telas externas
import inicio from '../pages/inicio.vue'

import home from '../pages/home.vue'
import teste1 from '../pages/teste1.vue'
import teste2 from '../pages/teste2.vue'

//Telas de erro
import pagina403 from '../pages/erros/403.vue'
import pagina404 from '../pages/erros/404.vue'

const routes = [
    {
        name: 'inicio',
        path: '/',
        component: inicio,
    },
    {
        name: 'home',
        path: '/home',
        component: home,
    },
    {
        name: 'teste1',
        path: '/teste1',
        component: teste1,
    },
    {
        name: 'teste2',
        path: '/teste2',
        component: teste2,
    },
    {
        name: '403',
        path: '/403',
        component: pagina403,
    },
    //tela "não encontrada"
    {
        path: '*',
        name: '/404',
        component: pagina404,
    }
];

export default routes;