//#region IMPORTS
import { validarLongitudMinima, validarMayuscula, validarMinuscula } from './utils/validations.js';

//#region DOMContentloaded
document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.querySelector('input');

    const mapValidationsForEachInput = {
        userNameInput: [
            inputText => validarMinuscula(inputText, 1),
            inputText => validarMayuscula(inputText, 1),
            inputText => validarLongitudMinima(inputText, 6)
        ]
    };

    userNameInput.addEventListener('input', e => checkValidations(e, mapValidationsForEachInput));
});

//#region Check Validations
/**
 * @function checkvalidations
 * @description function that checks the validations of the inputs
 * @param {Event} e - Event that was produced in the input
 * @param {object} validations - Object that contains the validations for each input
 */
function checkValidations(e, validations) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    //is there is no element in the DOM with a name thath matches any "Validations - Object" key we need to adjest the HTML
    if (!validations[inputName]) {
        throw new Error('No se encontró una validación para este input en el HTML.');
    }

    //clean error list
    const errorListContainer = document.querySelector('.listOfErrorsContainer');
    if (errorListContainer) cleanHTMLElement(errorListContainer);

    //execute each validation
    validations[inputName].forEach(validation => {
        const { isValid, errorMessage } = validation(inputValue);
        if (!isValid) generateErrorMessage(errorMessage, e.target);
    });

    generateListOfErrorsContainerIfNecessary(e.target);
    //make sure the error container exists
}

//#region Generate Err Msg
/**
 * @function generateerror message
 * @description function that shows the errors in the input
 * @param {string} errorMsg - Error message that will be shown
 * @param {HTMLElement} target - Element in which the error will be shown
 */
function generateErrorMessage(errorMsg, target) {
    const errorListContainer = generateListOfErrorsContainerIfNecessary(target);

    const errorItem = document.createElement('LI');
    errorItem.classList.add('error');
    errorItem.textContent = errorMsg;
    errorListContainer.appendChild(errorItem);
}

//#region Create Err Container
/**
 * @function generate listof errors container if necessary
 * @description function that creates the error container if it doesn't exist
 * @param {HTMLElement} target - Element in which the error container will be created
 * @returns {HTMLElement} - Error container
 */
function generateListOfErrorsContainerIfNecessary(target) {
    let errorListContainer = document.querySelector('.listOfErrorsContainer');

    if (!errorListContainer) {
        errorListContainer = document.createElement('UL');
        errorListContainer.classList.add('listOfErrorsContainer');
        target.after(errorListContainer);
    }

    return errorListContainer;
}

//#region Clean HTML 
/**
 * @function clean html element
 * @description function that deletes all the children of an element
 * @param {HTMLElement} element - Element from which the children will be deleted
 */
function cleanHTMLElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

