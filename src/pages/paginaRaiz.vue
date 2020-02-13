<template>
    <div class="d-flex flex-column" id="app">
        <topo
            logoURL='/imgs/brasao-pbh.png'
            :sigla='sigla'
            homeLink="/"
            :itens-menu="itens_menu"
            :usuario="{name: 'cecilia'}"
            :logout-callback='logout'
        ></topo>

        <div class="container conteudo">
            <router-view></router-view>
        </div>

        <rodape
            logoURL='/imgs/brasao-pbh.png'
            :versao='versao'
        ></rodape>

    </div>
</template>

<script>

export default {
    methods: {
        logout() {
            alert("Fazer logout");
            // descomentar a linha abaixo para realizar o logout
            return this.$store.dispatch("LOGOUT_REQUEST");
        }
    },
    computed: {
        sigla() {
            return process.env.MIX_APP_SIGLA || process.env.VUE_APP_SIGLA;
        },
        versao() {
            return process.env.MIX_APP_VERSAO || process.env.VUE_APP_VERSAO;
        },
        /**
         * Retorna os itens do menu
         */
        itens_menu() {
            let itens = [
                {titulo: 'Menu', subitens: [
                    { titulo: 'Home', to: { name: 'home'}},
                    { titulo: 'Teste 1', to: { name: 'teste1'}},
                    { titulo: 'Teste 2', to: { name: 'teste2'}},
                ]},
            ];
            return itens;

        }
    }
}
</script>

