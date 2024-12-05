//#region IMPORTS
import {
    validateCapital, validateInputContainsNumber, validateInputContainsPuntuation,
    validateInputEmail, validateInputIsNotEmpty, validateInputMinimumLength,
    validateLowerCase
} from './utils/validations.js';

//#region DOMContentLoaded
document.addEventListener('DOMContentLoaded', startApp);

//#region Start App
function startApp() {
    const registerForm = document.forms.registerForm;
    const mapFormInputsValidationsToMeet = {
        name: [validateInputIsNotEmpty, validateInputMinimumLength, validateLowerCase],
        last_name: [validateInputIsNotEmpty],
        phone: [validateInputIsNotEmpty, validateInputContainsNumber],
        email: [validateInputIsNotEmpty, validateInputEmail],
        password: [validateInputIsNotEmpty, input => validateInputMinimumLength(input, 10), validateCapital, validateInputContainsPuntuation],
        repPassword: [validateInputIsNotEmpty, input => validateInputMinimumLength(input, 10), validateCapital, validateInputContainsPuntuation]
    }

    registerForm.addEventListener('submit', e => handleRegisterSubmit(e, registerForm, mapFormInputsValidationsToMeet));
}

//#region Handle Submit
/**
 * @description Function that handles the register form submission
 * @param {Event} e - The event that was produced when the form was submitted
 * @param {HTMLFormElement} form - The form that was submitted
 * @param {Object.<String, Array<Function>>} validationForEachInput - An object that contains the validations for each input. The key is the same as the input name, and the value is an array of functions that validate the input
 */
function handleRegisterSubmit(e, form, validationForEachInput) {
    e.preventDefault();

    // Clean previous errors
    cleanAllErrors(form);

    for (const registerFormInput of form.elements) {
        if (registerFormInput.type !== 'text') continue;

        const { name, value } = registerFormInput;

        const functionsToValidateForCurrentInput = validationForEachInput[name];
        const validationNotPassedMsg = validateSingleInput(value, functionsToValidateForCurrentInput);

        if (validationNotPassedMsg !== '') {
            displayCurrentError(validationNotPassedMsg, registerFormInput);
            return; // Stop execution if an error is found
        }
    }

    // If no errors, process form submission
    alert('Formulario enviado correctamente');
}

/**
 * @description Validates a single input using the provided validation functions
 * @param {String} inputText
 * @param {Array<Function>} functionsToValidate
 * @returns {String} Error message if validation fails, or empty string if valid
 */
function validateSingleInput(inputText = '', functionsToValidate = []) {
    for (const currentFunction of functionsToValidate) {
        const { isValid, errorMessage } = currentFunction(inputText);
        if (!isValid) return errorMessage;
    }
    return ''; // Return empty string if all validations pass
}

/**
 * @description Displays an error message below the specified input element
 * @param {String} msg
 * @param {HTMLElement} element
 */
function displayCurrentError(msg, element) {
    const errorContainer = document.createElement('p');
    errorContainer.classList.add('error');
    errorContainer.textContent = msg;

    element.after(errorContainer);
}

/**
 * @description Removes all error messages from the form
 * @param {HTMLFormElement} form
 */
function cleanAllErrors(form) {
    const errors = form.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}
