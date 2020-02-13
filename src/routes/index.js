import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import store from '../stores/'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;