const board = document.getElementById('board');

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    const listOfRandomColors = generateListOfRandomColors();
    createContainerForEachColor(listOfRandomColors, board);
}

function generateListOfRandomColors() {
    const amounOfNumbers = 6;
    const list = [];

    for (let i = 0; i < amounOfNumbers; i++) {
        list.push(generateRandomColor());
    }

    return list;
}

function createContainerForEachColor(list = [], container) {

    const frament = document.createDocumentFragment();
    list.forEach(color => {
        const div = document.createElement('DIV');
        div.style.background = color;
        div.classList.add('color');
        div.setAttribute('data-color', color);

        frament.appendChild(div);
    });

    container.appendChild(frament);
}

function generateRandomColor() {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);

    return `rgb(${redValue},${greenValue},${blueValue})`;
}

