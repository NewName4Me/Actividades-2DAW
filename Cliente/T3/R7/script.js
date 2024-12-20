//region Ej1

const alumno1 = {
    nombre: 'erik',
    edad: 21,
    mayorDeEdad: function () {
        return this.edad > 18;
    }
}

function Alumno2(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const listaDeAlumnos = [
    new Alumno2('erik', 21),
    new Alumno2('eliseo', 22),
]

const mediaEdadGrupo = (grupo = [{}]) => grupo.reduce((acumulator, obj) => acumulator + obj.edad, 0) / grupo.length;

//#region Ej2
function Telefono(numero) {
    this.numero = numero;
    this.nLlamadas = 0;

    this.llamar = function () {
        this.nLlamadas++;
    }
}

 const myTelefono = new Telefono('66666666');
console.log(myTelefono.nLlamadas);
myTelefono.llamar();
console.log(myTelefono.nLlamadas);

//#region Ej3
function Punto(x, y) {
    this.x = x;
    this.y = y;

    this.getPosicion = function () {
        return { x, y }
    }
}

/* const myPunto = new Punto(2, 5);
console.log(myPunto.getPosicion()); */

//#region Ej4
class Casa {
    constructor(calle, numero, codPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codPostal = codPostal;
        this.mostrarMensajeCreacion();
    }

    /* Metodos Propios */
    mostrarMensajeCreacion() {
        const mensaje = `Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codPostal}`;
        console.log(mensaje);
        return mensaje;
    }

    /* SETTER */
    setNumero(numero) { this.numero = numero }
    setCalle(calle) { this.calle = calle }
    setCodigoPOstal(codigo) { this.codPostal = codigo }

    /* GETTER */
    imprimeCalle() { return this.calle }
    imprimeNumero() { return this.numero }
    imprimeCodigoPostal() { return this.codPostal }
}

/* const miCasa = new Casa('Garcia Prieto', '58', '15706');
const miCasa2 = new Casa('Camino Caneiro', '29', '32004');
const miCasa3 = new Casa('San clemente', 's/n', '15705');
console.log(miCasa.imprimeNumero());
console.log(miCasa3.imprimeCalle());
 */

//#region Ej5

class Alumno {
    constructor(id, nombre, notaMedia) {
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    consultarNotaMedia() {
        return this.notaMedia;
    }

    modificarNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
    }
}

class Colegio {
    constructor(nombre, nAulas, nAlumnos) {
        this.id = nombre;
        this.nombre = nAulas;
        this.nAlumnos = nAlumnos;
        this.alumnos = [];
        for (let i = 0; i < nAlumnos; i++) {
            //asumo que todos los alumnos tienen un 5 hasta que decidan modifucarlo
            this.alumnos.push(new Alumno(i, `alumno${i + 1}`, 5.00));
        }
    }

    consultarNotaMedia() {
        let sumatorioNotas = 0;
        this.alumnos.forEach(alumno => {
            sumatorioNotas += alumno.consultarNotaMedia();
        });
        return sumatorioNotas / this.nAlumnos;
    }
}

