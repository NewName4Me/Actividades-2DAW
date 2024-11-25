//#region ON LOAD
window.onload = () => {
    document.addEventListener('keydown', (e) => {
        console.log(`Pulsaste la tecla: ${e.code}`);
    });

    createCanvas(100, 100);

    const canvas = document.getElementById("canvas");
    const clearCanvasButton = document.getElementById("clearCanvas");

    //add the necesari event listeners
    canvas.addEventListener("mousemove", paintCell);
    canvas.addEventListener("contextmenu", preventContextMenu);
    clearCanvasButton.addEventListener("click", clearCanvas);
};

//#region Create Canvas
const createCanvas = (rows, columns) => {
    const fragment = document.createDocumentFragment();

    //create the canvas with the specified dimensions
    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        fragment.appendChild(cell);
    }

    const canvas = document.getElementById("canvas");
    canvas.appendChild(fragment);
};

//#region Paint Cell
const paintCell = (e) => {
    if (e.target.classList.contains("cell")) {
        if (e.ctrlKey) {
            e.target.style.backgroundColor = "red";
        } else if (e.shiftKey) {
            e.target.style.backgroundColor = "blue";
        } else if (e.buttons === 2) { //right click 
            e.target.style.backgroundColor = "transparent";
        }
    }
};
/* 
const keyMapColor = {
    "ControlLeft": 'red',
    'ShiftLeft': 'blue',
    'keyX': 'transparent'
} */

//#region Clear canvas
const clearCanvas = () => {
    const canvas = document.getElementById("canvas");
    const cells = canvas.querySelectorAll(".cell");
    cells.forEach((cell) => (cell.style.backgroundColor = "transparent"));
};

//#region Prevent Right Click
const preventContextMenu = (e) => {
    e.preventDefault();
};
