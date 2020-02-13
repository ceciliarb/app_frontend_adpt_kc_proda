# frontend_adptr_keycloak

## Project setup
```
git clone https://github.com/ceciliarb/app_frontend_adpt_kc_proda
npm install
npm run serve
```

## Explicando o código implementado
### Instalando o plugin
No arquivo [`src/main.js`](https://github.com/ceciliarb/app_frontend_adpt_kc_proda/blob/master/src/main.js#L14), o pacote `@prodabel/vue-keycloak-adapter` é importado:
```javascript
import keycloak from '@prodabel/vue-keycloak-adapter';
```
E o plugin registrado no objeto Vue:
```javascript
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
```

### Rotas
As rotas são definidas no arquivo [`src/main.js`](https://github.com/ceciliarb/app_frontend_adpt_kc_proda/blob/master/src/main.js#L42) (objeto `permissions`):
```javascript
...
    permissions: {
        'GERENTE': ['home', 'teste1'],
        'guest': ['teste2'],
        'any': ['inicio', '403', '404']
    },
...
```
Assim:
- as rotas `home` e `teste1` são abertas apenas para usuário de perfil `GERENTE`
- a rota `teste2` é aberta apenas para usuários não autenticados
- as rotas `inicio`, `403` e `404` são abertas para todos os usuários

### [`public/keycloak.json`](https://github.com/ceciliarb/app_frontend_adpt_kc_proda/blob/master/public/keycloak.json)
Esse arquivo define as propriedades de autorização do sistema.  
Foi baixado do http://autorizacaodesistemas-st.pbh.gov.br/

### Tratamento de erro 403
No arquivo [`src/main.js`](https://github.com/ceciliarb/app_frontend_adpt_kc_proda/blob/master/src/main.js#L30) 
```javascript
router.onError((err) => {
    if(err.toString().includes('403')) {
        router.push('403')
    }
})
```

### Logout
No arquivo [`src/pages/paginaRaiz.vue`](https://github.com/ceciliarb/app_frontend_adpt_kc_proda/blob/master/src/pages/paginaRaiz.vue#L31) é realizado o logout:
```javascript
    methods: {
        logout() {
            alert("Fazer logout");
            // descomentar a linha abaixo para realizar o logout
            return this.$store.dispatch("LOGOUT_REQUEST");
        }
    }
```

