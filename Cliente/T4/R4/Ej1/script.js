const validarMayuscula = (inputText = '') => /[A-Z]/.test(inputText);
const validarCaracteresEspeciales = (inputText = '') => /[!@#$%^&]/.test(inputText);
const validarCorreo = (inputText = '') => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(inputText);
}
const validarTarjetaCredito = (inputText = '') => {
    const targetaCreditoRegex = /^([0-9]{4}[- ]?){3}[0-9]{4}[- ]?[0-9]{3,4}$/;
    return targetaCreditoRegex.test(inputText);
}
const validarLongitud = (inputText = '') => /......../.test(inputText); //se que es muy cutre, pero funciona a la perfeccion y me hace feliz
const validarNumero = (inputText = '') => /[0-9]/.test(inputText);