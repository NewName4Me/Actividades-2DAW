//#region Not Empty
const validateInputIsNotEmpty = (inputText = '') => {
    const isValid = /./.test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : 'El campo no puede estar vacío.'
    };
};

//#region Minimum Lenght
const validateInputMinimumLength = (inputText = '', length = 8) => {
    const isValid = new RegExp(`.{${length},}`).test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : `El texto debe tener al menos ${length} caracteres.`
    };
};

//#region Contains Number
const validateInputContainsNumber = (inputText = '') => {
    const isValid = /[0-9]/.test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : 'El texto debe contener al menos un número.'
    };
};

//#region Valid Email
const validateInputEmail = (inputText = '') => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = emailRegex.test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : 'El formato del correo electrónico no es válido.'
    };
};

//#region Contains Punctuation
const validateInputContainsPuntuation = (inputText = '') => {
    const puntuationRegex = /[.,:;!?¡¿'"()-]/;
    const isValid = puntuationRegex.test(inputText);
    return {
        isValid,
        errorMessage: isValid ? '' : 'El texto debe contener al menos un signo de puntuacion'
    }

}

//#region EXPORT 
export {
    validateInputIsNotEmpty,
    validateInputEmail,
    validateInputContainsNumber,
    validateInputMinimumLength,
    validateInputContainsPuntuation,
};
