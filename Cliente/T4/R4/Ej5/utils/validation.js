/**
 * Funcion que valida que una tarjeta de crédito (Visa ,MasterCard o Discover)
 * sea valida
 * @param {String} inputText 
 * @returns 
 */
const validateCreditCard = (inputText = '') => {
    const creditCardRegex = /^(?:4\d([\-\s]?)\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\-\s]?)\d{4}\2\d{4}\2\d{4})$/;
    const isValid = creditCardRegex.test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : 'El formato de la tarjeta de crédito no es válido.'
    };
};

export { validateCreditCard };