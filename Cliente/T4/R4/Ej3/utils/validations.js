const validarMinuscula = (inputText = '', amountOfLowerCase = 1) => {
    const isValid = new RegExp(`^(.*[a-z]){${amountOfLowerCase}}.*$`).test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : `${amountOfLowerCase} lowercase character`
    }
}

const validarMayuscula = (inputText = '', amountOfCapitals = 1) => {
    const isValid = new RegExp(`^(.*[A-Z]){${amountOfCapitals}}.*$`).test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : `${amountOfCapitals} uppercase character`
    }
}

const validarLongitudMinima = (inputText = '', minimunLenght = 8) => {
    const isValid = new RegExp(`.{${minimunLenght},}`).test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : `${minimunLenght} minimum characters`
    }
}

export {
    validarLongitudMinima,
    validarMayuscula,
    validarMinuscula
};
