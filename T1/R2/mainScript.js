import { createTitles } from "./js/ej1.js";
import { getTableAtributes } from "./js/ej2.js";
import { getTableAtributesWithBlackTiles } from "./js/ej3.js";
import { getTableAtributesWithBlackTilesUsingWhileLoop } from "./js/ej4.js";
import { guessNumber } from "./js/ej5.js";
import { createMultiplicationTables } from "./js/ej6.js";
import { dataFor2DTable } from "./js/ej7.js";
import { dataForChessBoard } from "./js/ej8.js";

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');

    //todos los botones tengan un evento en click que me permita llamar ala funcion correspondiente
    botones.forEach(boton => {
        boton.addEventListener('click', e => {
            //identifico cada boton con un id unico
            const btnId = e.target.id;

            const funcionesQueDebeEjecutarCadaBoton = {
                "btn1": createTitles,
                "btn2": getTableAtributes,
                "btn3": getTableAtributesWithBlackTiles,
                "btn4": getTableAtributesWithBlackTilesUsingWhileLoop,
                "btn5": guessNumber,
                "btn6": createMultiplicationTables,
                "btn7": dataFor2DTable,
                "btn8": dataForChessBoard
            }

            //ejecutamos la funcion correspondiente
            funcionesQueDebeEjecutarCadaBoton[btnId]();
        });
    });
});