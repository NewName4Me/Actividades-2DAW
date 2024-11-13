import { Puzzle } from './components/Puzzle.js';
import { DirectionEnum } from './utils/enum/DirectionEnum.js';
document.addEventListener('DOMContentLoaded', iniciarApp);

const imgFolderUrl = new URL('../assets/Nivel1-4by4', import.meta.url);
const puzzle = new Puzzle(4, imgFolderUrl);

function iniciarApp() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    const resetBtn = document.getElementById('reset-btn');

    shuffleBtn.addEventListener('click', shuffleBoard);
    resetBtn.addEventListener('click', resetBoard);

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        moveTile(e.key);
        cargarTablero(puzzle);
    });

    cargarTablero(puzzle);
}

function cargarTablero(tablero) {
    const puzzleBoard = document.getElementById('puzzle-board');
    puzzleBoard.innerHTML = '';
    tablero.draw(puzzleBoard);
    const puzzleState = document.getElementById('puzzle-state');
    puzzleState.textContent = tablero.isSolved() ? 'Puzzle resuelto' : 'Puzzle no resuelto';
}

function shuffleBoard() {
    puzzle.shuffleBoard();
    cargarTablero(puzzle);
}

function resetBoard() {
    puzzle.reset();
    cargarTablero(puzzle);
}

function moveTile(key) {
    switch (key) {
        case 'ArrowUp': puzzle.moveTile(DirectionEnum.UP); break;
        case 'ArrowDown': puzzle.moveTile(DirectionEnum.DOWN); break;
        case 'ArrowLeft': puzzle.moveTile(DirectionEnum.LEFT); break;
        case 'ArrowRight': puzzle.moveTile(DirectionEnum.RIGHT); break;
        default: break;
    }
}

