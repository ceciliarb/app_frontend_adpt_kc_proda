/**
 * @file Contém as constantes da aplicacao
 */
import sistema from "./sistema";

const constantes = Object.freeze({
    LOCALE: 'pt-BR',
    BASE_URL: window.location.protocol+'//'+window.location.host,
    sistema
});

export default constantes;
