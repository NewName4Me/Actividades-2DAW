//#region IMPORT
import {
    validateInputIsNotEmpty,
    validateInputContainsNumber,
    validateInputEmail,
    validateInputMinimumLength,
    validateInputContainsPuntuation
} from './utils/validationsRegex.js';

const registerForm = document.forms.registerForm;

//#region map input - validation
/**
 * mapea las validaciones para cada input en el formulario.
 */
const mapFormInputsValidationsToMeet = {
    nombre: [validateInputIsNotEmpty],
    apellidos: [validateInputIsNotEmpty],
    dni: [validateInputIsNotEmpty],
    telefono: [validateInputIsNotEmpty, validateInputContainsNumber],
    email: [validateInputIsNotEmpty, validateInputEmail],
    nombreDeUsuario: [
        validateInputIsNotEmpty,
        validateInputContainsNumber,
        (input) => validateInputMinimumLength(input, 8),
        validateInputContainsPuntuation
    ],
};

// agrega un evento `focusout` para validar cada input
for (const child of registerForm.children) {
    const input = child.querySelector('input');
    if (input) {
        input.addEventListener('focusout', (e) => checkInputValidation(e));
    }
}

//#region Check Validation evt
function checkInputValidation(e) {
    const currentInput = e.target; // input que desencadenó el evento
    const inputName = currentInput.name;
    const inputValue = currentInput.value.trim(); // evita errores por espacios al inicio o final

    // ebtiene las validaciones para este input
    const validations = mapFormInputsValidationsToMeet[inputName];
    if (!validations) return;

    // elimina cualquier contenedor de error existente
    removeErrorContainer(currentInput);

    // ejecuta las validaciones y muestra el primer error encontrado
    for (const validation of validations) {
        const { isValid, errorMessage } = validation(inputValue);
        if (!isValid) {
            createErrorContainer(currentInput, errorMessage);
            return;
        }
    }
}

//#region Create Error Div
/**
 * crea un contenedor para mensajes de error y lo asocia al input.
 * @param {HTMLInputElement} input - El input al que se asocia el mensaje de error.
 * @param {string} errorMessage - El mensaje de error a mostrar.
*/
function createErrorContainer(input, errorMessage) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message', 'text-danger', 'mt-1');
    errorContainer.textContent = errorMessage;
    input.after(errorContainer);
}

//#region Remove Error Div
/**
 * elimina el contenedor de error asociado al input, si existe.
 * @param {HTMLInputElement} input - El input del que se eliminará el mensaje de error.
 */
function removeErrorContainer(input) {
    const errorContainer = input.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('error-message')) {
        errorContainer.remove();
    }
}


