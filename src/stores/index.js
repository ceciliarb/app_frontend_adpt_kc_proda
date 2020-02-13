import Vue from 'vue'
import Vuex from 'vuex'
// chamadas a API
import requests from "../requests/index";
// constantes do sistema
import constants from "../constants/index";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        requests: requests,
        constants: constants,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        http: state => state.requests, 
        const: state => state.constants
    }
})
