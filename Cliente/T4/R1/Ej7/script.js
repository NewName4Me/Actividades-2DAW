/**
 * @var {HTMLFormElement}
 */
const form = document.forms.userForm;
const h1 = document.createElement('H1');

for (const child of form.children) {

    child.addEventListener('focus', e => childOnFocus(e));
    child.addEventListener('blur', e => childBlur(e));
}

/**
 * @param {FocusEvent} e
 */
function childOnFocus(e) {
    const elementOnFocus = e.target.name;

    showUserHelp(elementOnFocus);
}

/**
 * @param {string} element
 */
function showUserHelp(element) {
    h1.textContent = element;

    form.insertBefore(h1, form.firstElementChild);
}

/**
 * @param {FocusEvent} e
 */
function childBlur(e) {
    h1.remove();
}



