import { months } from './db/months.js';
import { validateCreditCard } from './utils/validation.js';

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    const $monthContainer = document.getElementById('monthContainer');
    const $yearContainer = document.getElementById('yearContainer');

    const $submitCardForm = document.forms.submitCard;

    $submitCardForm.addEventListener('submit', e => handleSubmitCardForm(e, $submitCardForm));
    loadListOfMonths(months, $monthContainer);
    loadListOfYears($yearContainer);
}

/**
 * 
 * @param {Array<String>} months 
 * @param {HTMLElement} container
 */
function loadListOfMonths(months, container) {
    const fragment = document.createDocumentFragment();

    months.forEach(month => {
        const $option = document.createElement('OPTION');
        $option.textContent = month;
        $option.value = month;

        fragment.appendChild($option);
    });

    container.appendChild(fragment);
}

/**
 * 
 * @param {Number} initial_year 
 * @param {HTMLElement} container 
 */
function loadListOfYears(container) {
    const CURRENT_YEAR = new Date().getFullYear();
    const NUMBER_OF_YEARS_TO_DISPLAY = 16;

    const fragment = document.createDocumentFragment();

    for (let i = CURRENT_YEAR; i < CURRENT_YEAR + NUMBER_OF_YEARS_TO_DISPLAY; i++) {
        const $option = document.createElement('OPTION');
        $option.textContent = i;
        $option.value = i;

        fragment.appendChild($option);
    }

    container.appendChild(fragment);
}

/**
 * 
 * @param {Event} e 
 * @param {HTMLElement} form
 */
function handleSubmitCardForm(e, form) {
    e.preventDefault();

    const cardInput = form.querySelector('#cardNumbers');

    const { isValid, errorMessage } = validateCreditCard(cardInput);

    if (!isValid) {
        const errorDiv = document.createElement('DIV');
        errorDiv.textContent = errorMessage;
        errorDiv.classList.add('errorMsg');
        cardInput.after(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 1500);
    }

    e.target.reset();
}