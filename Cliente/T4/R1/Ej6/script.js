import { colorNames } from './colorNames.js';

document.addEventListener('DOMContentLoaded', startApp);

//#region Start App
function startApp() {
    const listOfColorsContainer = document.querySelector('ul');
    const imgContainer = document.getElementById('imgContainer');

    drawListOfColors(listOfColorsContainer);
    imgContainer.addEventListener('mouseover', () => changeImgContent(imgContainer));
    imgContainer.addEventListener('mouseout', () => restoreImgContent(imgContainer));
}

//#region Draw List
/**
 * 
 * @param {HTMLElement} container 
 */
function drawListOfColors(container) {
    const listOfColors = colorNames;

    const listOfColorsFragment = document.createDocumentFragment();

    Object.entries(listOfColors).forEach(([color, value]) => {
        const listElement = document.createElement('li');

        listElement.textContent = value;
        listElement.setAttribute('data-colorHex', color);
        listElement.addEventListener('mouseover', (e) => changeElementAppearence(e));
        listElement.addEventListener('mouseout', (e) => changeElementAppearenceToOriginal(e));

        listOfColorsFragment.appendChild(listElement);
    })

    container.appendChild(listOfColorsFragment);
}

//#region Change On Hover
function changeElementAppearence(e) {
    const color = e.target.getAttribute('data-colorHex');
    const elementToChange = e.target;

    elementToChange.textContent = color;
    elementToChange.style.background = color;
}

//#region Change On Leave
function changeElementAppearenceToOriginal(e) {
    const elementToChange = e.target;
    const hexCode = colorNames[e.target.textContent];

    elementToChange.style.background = 'white';
    elementToChange.textContent = hexCode;
}

function changeImgContent(imgContainer) {
    imgContainer.style.backgroundImage = 'url(https://picsum.photos/200/300)';
}

function restoreImgContent(imgContainer) {
    imgContainer.style.backgroundImage = 'url(./original.avif)';
}
