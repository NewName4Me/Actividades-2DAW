let lastKeyPressed = null;
let isPainting = false;
let mouseX = 0;
let mouseY = 0;

window.onload = () => {
    document.addEventListener('keydown', e => {
        e.preventDefault(); //para que el navegador no haga ocsas raras por usar teclas especiales  
        lastKeyPressed = e.code;
        isPainting = true;
        checkKeyPressed();
    });

    document.addEventListener('keyup', e => {
        if (e.code === lastKeyPressed) {
            isPainting = false;//para decirle que deje de pintar
        }
    });

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        //solo si podemos pintar(cuando pulsamos un tecla de nuestra lista podemos pintar)
        if (isPainting) {
            checkKeyPressed();
        }
    });

    createCanvas(100, 100);
}

/**
 * funcion que devuleve el color con el que debemos pintar nuestra celda
 */
function checkKeyPressed() {
    if (lastKeyPressed in keyMapColor && isPainting) {
        paintCellOnLastKeyPressedPosition(keyMapColor[lastKeyPressed]);
    }
}

function paintCellOnLastKeyPressedPosition(color) {
    const canvas = document.getElementById("canvas");
    const cells = canvas.querySelectorAll(".cell");

    //intentar coger la celda exacta
    const canvasRect = canvas.getBoundingClientRect();
    const x = Math.floor((mouseX - canvasRect.left) / 20);
    const y = Math.floor((mouseY - canvasRect.top) / 20);

    const cellToPaint = cells[x + y * 100];
    cellToPaint.style.backgroundColor = color;
}


// Función para crear el canvas con las celdas
const createCanvas = (rows, columns) => {
    const fragment = document.createDocumentFragment();

    // crea un monton de celdas
    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        fragment.appendChild(cell);
    }

    const canvas = document.getElementById("canvas");
    canvas.appendChild(fragment);
};

const keyMapColor = {
    'ControlLeft': 'red',
    'AltLeft': 'blue',
    'KeyX': 'green',
    'KeyD':'transparent'
}

