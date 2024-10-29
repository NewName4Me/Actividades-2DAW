//#region Ej1
/**
 * Crea una tabla con los datos de los alumnos en el documento HTML.
 */
function createClaseList() {
    const claseList = document.querySelector('#clase-list');
    const clase = crearClase();
    clase.forEach(alumno => {
        const row = document.createElement('TR');
        const datos = alumno.split(', ');
        datos.forEach(dato => {
            const td = document.createElement('TD');
            td.textContent = dato;
            row.append(td);
        });
        claseList.append(row);
    });
}

/**
 * Crea una clase con los datos de los alumnos.
 * @returns {string[]} La clase con los datos de los alumnos.
 */
const crearClase = () => {
    const clase = [];

    clase.push("Angel Garcia, 20, 6, 7, 10");
    clase.push("María Pérez, 19, 7, 6, 9");
    clase.push("Juan López, 21, 8, 9, 7");
    clase.push("Sofía Martínez, 20, 9, 8, 6");
    clase.push("Pedro Sánchez, 20, 7, 8, 9");

    return clase;
}

createClaseList();

//#region Ej2
/**
 * Maneja el evento click para mostrar la nota de un alumno o su media.
 */
const ej2 = document.querySelector('#ej2').addEventListener('click', () => {
    const alumnoPosicion = Number(prompt('Indica la posición del alumno (como si fuera base 1, no 0)'));
    const trimestre = Number(prompt('¿De qué trimestre quieres saber la nota? (deja en blanco si quieres la media)'));

    if (alumnoPosicion <= 0) return;

    const clase = crearClase();
    const alumno = clase[alumnoPosicion - 1];

    if (trimestre > 0) {
        alert(alumno.split(',')[trimestre + 1]);
        return;
    }

    const ultimasTresNotas = alumno.split(',').slice(-3);
    let suma = 0;
    for (const nota of ultimasTresNotas) {
        suma += Number(nota);
    }
    const media = suma / ultimasTresNotas.length;
    alert(`La media de las últimas tres notas es: ${media}`);
});

//#region Ej3
/**
 * Calcula y muestra la nota media de todos los estudiantes de la clase.
 */
const ej3 = document.querySelector('#ej3').addEventListener('click', () => {
    const clase = crearClase();
    let sumaNotas = 0;

    clase.forEach(alumno => {
        const datosAlumno = alumno.split(',');
        const notaPrimerTrimestre = Number(datosAlumno[2]);
        const notaSegundoTrimestre = Number(datosAlumno[3]);
        const notaTerceroTrimestre = Number(datosAlumno[4]);

        const promedioAlumno = (notaPrimerTrimestre + notaSegundoTrimestre + notaTerceroTrimestre) / 3;
        sumaNotas += promedioAlumno;
    });

    const promedioClase = sumaNotas / clase.length;
    alert(`La nota media de la clase es: ${promedioClase}`);
});

//#region Ej4
/**
 * Selecciona aleatoriamente un nombre de alumno de la clase y lo muestra en un alert.
 */
const ej4 = document.querySelector('#ej4').addEventListener('click', () => {
    const clase = crearClase();
    const numAlAzar = Math.floor(Math.random() * clase.length);

    const nombre = clase[numAlAzar].split(',')[0];
    alert(nombre);
});

//#region Ej5
/**
 * Genera un array de 100 números aleatorios y los clasifica en pares e impares.
 */
const paresImpares = document.querySelector('#ej5').addEventListener('click', () => {
    const cantidadNumerosAleatoriosAGenerar = 100;
    const limiteInferior = 1;
    const limiteSuperior = 1000;

    const listaDeNumerosGenerados = [];
    const listaDeNumerosPares = [];
    const listaDeNumerosImpares = [];

    for (let i = 0; i < cantidadNumerosAleatoriosAGenerar; i++) {
        const random = Math.floor((Math.random() * limiteSuperior) + limiteInferior);

        if (random % 2 == 0) {
            listaDeNumerosPares.push(random);
        } else {
            listaDeNumerosImpares.push(random);
        }

        listaDeNumerosGenerados.push(random);
    }

    alert("Lista De Números Generados:" + listaDeNumerosGenerados);
    alert("Lista De Números Pares:" + listaDeNumerosPares);
    alert("Lista De Números Impares:" + listaDeNumerosImpares);
});

//#region Ej6
/**
 * Da de alta un empleado y muestra su sueldo basado en las ventas.
 */
const workers = [];

/**
 * Da de alta un empleado y muestra su sueldo basado en las ventas.
 * Busca al trabajador en la lista de trabajadores, si no existe lo da de alta
 * y suma las ventas actuales con las nuevas.
 * Luego muestra el contenido de la lista de trabajadores y sus sueldos en una
 * tabla.
 */
const darDeAltaEmpleadoYVerSueldo = document.querySelector('#sendData').addEventListener('submit', (e) => {
    e.preventDefault();

    const workerName = document.querySelector('#ej6_name').value;
    const workerSells = parseFloat(document.querySelector('#ej6_sells').value);

    let worker;
    // busco al trabajador en la lista de trabajadores
    for (const w of workers) {
        if (w.name === workerName) {
            worker = w;
            break;
        }
    }
    if (!worker) {
        // si no existe, lo doy de alta
        worker = { name: workerName, sells: 0 };
        workers.push(worker);
    }
    // sumo las ventas actuales con las nuevas
    worker.sells += workerSells;

    // muestro el contenido de la lista de trabajadores y sus sueldos en una tabla
    mostrarContenido();
});

/**
 * muestro el contenido de los trabajadores y sus sueldos en una tabla
 * creadno por cada trabjador en nuestra lista una nueva fila
 */
function mostrarContenido() {
    const tbody = document.querySelector('#workers');
    tbody.innerHTML = '';

    // recorro la lista de trabajadores y muestro su contenido en la tabla
    workers.forEach(worker => {
        const sueldo = 200 + (0.09 * worker.sells);

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${worker.name}</td>
            <td>${worker.sells}</td>
            <td>${sueldo.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

//#region Ej7
const rellenarArrayDeCeros = document.querySelector('#ej7_a').addEventListener('click', () => {
    alert(Array(10).fill(0));
});
const sumar1ACadaPosicionDeUnArray = document.querySelector('#ej7_b').addEventListener('click', () => {
    const userNumbers = prompt('Dame una lista de números separados por coma(,)');
    const arrayNumerosUserMasUno = [];

    let arrayNumbers = userNumbers.split(',');
    arrayNumbers.forEach(number => {
        arrayNumerosUserMasUno.push(Number(number) + 1);
    });

    alert(arrayNumerosUserMasUno);
});
const separadosPorComa = document.querySelector('#ej7_c').addEventListener('click', () => {
    const arrayOriginal = [1, 2, 4, 5, 6];
    alert('Array Original: ' + arrayOriginal);
    alert('Array Con Espacios: ' + arrayOriginal.join(' '));
});

//#region Ej8
const simularTiradaDados = document.querySelector('#ej8').addEventListener('click', () => {
    const numeroDeDados = 2;
    const numeroDeTiradas = 36000;
    const resultadosSimulacion = new Map();

    for (let i = 0; i < numeroDeTiradas; i++) {
        const tiradaObtenida = tirarDados(numeroDeDados);
        modificarListaDeResultados(tiradaObtenida, resultadosSimulacion); // Pasamos el objeto Map como segundo parámetro
    }

    // mostramos los resultados
    let mensaje = '';
    for (const [suma, frecuencia] of resultadosSimulacion) {
        mensaje += `Suma ${suma}: ${frecuencia} veces\n`;
    }
    alert(mensaje);
});

/**
 * The function `tirarDados` simulates rolling a dice a specified number of times and returns the sum
 * of the results.
 * @param numeroDeTiradas - The `numeroDeTiradas` parameter in the `tirarDados` function represents the
 * number of times you want to roll a dice. The function will simulate rolling a dice the specified
 * number of times and return the sum of all the dice rolls.
 * @returns The function `tirarDados` is returning the result of calling another function
 * `sumarResultadoDados` with the array `resultadosTiradas` as an argument.
 */
function tirarDados(numeroDeTiradas) {
    const resultadosTiradas = [];

    for (let i = 0; i < numeroDeTiradas; i++) {
        const tirarDado = Math.floor((Math.random() * 6) + 1);
        resultadosTiradas.push(tirarDado);
    }

    return sumarResultadoDados(resultadosTiradas);
}

/**
 * The function `sumarResultadoDados` calculates the sum of an array of numbers.
 * @param [resultados] - The `resultados` parameter in the `sumarResultadoDados` function is an array
 * that contains the results of some data. The function calculates the sum of all the elements in the
 * `resultados` array and returns the total sum. If no array is provided, the default value is an empty
 * @returns The function `sumarResultadoDados` is returning the sum of all elements in the `resultados`
 * array.
 */
function sumarResultadoDados(resultados = []) {
    let suma = 0;
    resultados.forEach(resultado => {
        suma += resultado;
    });

    return suma;
}

/**
 * The function `modificarListaDeResultados` updates a map by incrementing the value associated with a
 * given key or adding the key with a value of 1 if it doesn't exist.
 * @param number - The `number` parameter is the key that you want to add to the `resultados` map or
 * update its count if it already exists.
 * @param resultados - Resultados is a Map data structure that stores key-value pairs, where the key is
 * a number and the value is the frequency of that number in a list of results. The function
 * `modificarListaDeResultados` takes a number and the resultados Map as parameters, and updates the
 * frequency of the
 */
function modificarListaDeResultados(number, resultados) {
    if (!resultados.has(number)) {
        resultados.set(number, 1);
    } else {
        resultados.set(number, resultados.get(number) + 1);
    }
}

//#region Ej9
/* The above JavaScript code is creating a simulation of rolling two dice 36,000 times and recording
the combinations that occur. Here is a breakdown of what the code is doing: */
const simularTiradaDadosArrayBi = document.querySelector('#ej9').addEventListener('click', () => {
    const numeroDeTiradas = 36000;
    // Creo una matriz bidimensional, con 6 subarrays rellenos de 0
    const combinaciones = Array.from({ length: 6 }, () => Array(6).fill(0));

    // Simulamos las tiradas y actualizamos las combinaciones
    for (let i = 0; i < numeroDeTiradas; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        // Aumentamos 1 en la posición donde haya sucedido esta tirada de dados
        combinaciones[dado1 - 1][dado2 - 1]++;
    }

    // Construimos la tabla en formato HTML con backticks
    let tablaHTML = `<table border="2">
        <tr>
            <th>Dado 1 \\ Dado 2</th>`;
    for (let j = 1; j <= 6; j++) {
        tablaHTML += `<th>${j}</th>`;
    }
    tablaHTML += `</tr>`;

    for (let i = 0; i < 6; i++) {
        tablaHTML += `<tr><th>${i + 1}</th>`;
        for (let j = 0; j < 6; j++) {
            tablaHTML += `<td>${combinaciones[i][j]}</td>`;
        }
        tablaHTML += `</tr>`;
    }
    tablaHTML += `</table>`;

    // Mostramos la tabla en el documento HTML
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = tablaHTML; // Insertamos el HTML generado
});


//#region Ej10
const procesarFormularioVuel = document.querySelector('.flightForm').addEventListener('submit', (e) => {
    e.preventDefault();

    //tomo los datos necesarios del formulario
    const userName = document.querySelector('.Ej10_name').value;
    const userType = document.querySelector('.Ej10_type').value;

    //tomo de la sesion los asientos existentes si no hay sesion creo un array con diez posiciones y lo lleno
    let arrayDeAsientosTotales = JSON.parse(sessionStorage.getItem('asientos')) || new Array(10).fill(null);
    const arrayDeAsientosFirst = arrayDeAsientosTotales.slice(0, 5);
    const arrayDeAsientosTurist = arrayDeAsientosTotales.slice(5);

    //busco el primer asiento que haya disponible dependiendo de si estamos en clase first o turista
    let indexAsiento = userType === 'First' ? arrayDeAsientosFirst.findIndex(asiento => asiento === null) : arrayDeAsientosTurist.findIndex(asiento => asiento === null);

    //si no nos quedan asientos mostramos un error por pantalla
    if (indexAsiento === -1) {
        alert('No hay asientos disponibles en la clase seleccionada.');
        return;
    }

    //añadimos los asientos necesarois
    if (userType === 'First') {
        arrayDeAsientosFirst[indexAsiento] = userName;
    } else {
        arrayDeAsientosTurist[indexAsiento] = userName;
    }

    //añadimos al JSON los datos 
    arrayDeAsientosTotales = [...arrayDeAsientosFirst, ...arrayDeAsientosTurist];
    sessionStorage.setItem('asientos', JSON.stringify(arrayDeAsientosTotales));

    //mostramos la nueva ventana
    const nuevaVentana = window.open('', 'Tarjeta de embarque');
    nuevaVentana.document.write(`<h1>Tarjeta de embarque</h1>
                                <p>Usuario: ${userName}</p>
                                <p>Número de asiento: ${userType === 'First' ? indexAsiento + 1 : indexAsiento + 6}</p>
                                <p>Tipo de asiento: ${userType}</p>`);

    //limpiamos el formulario para no reescribirlo todo a mano
    document.querySelector('.flightForm').reset();
});


//#region Ej11
