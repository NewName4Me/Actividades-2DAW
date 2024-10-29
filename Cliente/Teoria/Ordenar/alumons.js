const student = {
    name: "Juan",
    group: "1SMR",
    grades: [4, 5],
    showGrades: function () {
        this.grades.forEach(grade => {
            console.log(grade);
        });
    },
    addNota: function (grade) {
        this.grades.push(grade);
    },
    addNotas: function (grades = []) {
        this.grades = [...this.grades, ...grades];
    },
    sortGradesHigherToLower: function () {
        return this.grades.sort((a, b) => b - a);
    }
}

/* console.log(student.showGrades());
console.log('------------');
console.log(student.addNota(2));
console.log('------------');
console.log(student.showGrades());
console.log('------------');
console.log(student.addNotas([7, 8]));
console.log('------------');
console.log(student.showGrades());
console.log('------------');
console.log(student.sortGradesHigherToLower()); */

const arrAlumnos = [{
    nombre:'Erik',
    grupo:"7",
    age: 25,
    notas:[4,6]
},{
    nombre:'Weon',
    grupo:"2",
    age: 22,
    notas:[5,6]
},{
    nombre:'Alfredo',
    grupo:"2",
    age: 28,
    notas:[8,6]
},{
    nombre:'Erik',
    grupo:"4",
    age: 30,
    notas:[7,10]
}];

function ordenarArrayObjetosPorNombre(array=[]){
    return array.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

function ordenarArrayObjetosPorEdad(array=[]){
    return array.sort((a, b) => a.age -b.age);
}

function ordenarArrayObjetosPorNombreYNota(array=[]){
    return array.sort((a,b) => a.nombre.localeCompare(b.nombre) || a.grupo - b.grupo);
}

function ordenarArrayObjetosPorMediaNotas(arr = []) {
    return arr.sort((a, b) => notaMedia(b.notas) - notaMedia(a.notas));
}

function notaMedia(notas) {
    return notas.reduce((acumulator, valor) => acumulator + valor, 0) / notas.length;
}

/* console.log(ordenarArrayObjetosPorNombre(arrAlumnos));
console.log(ordenarArrayObjetosPorEdad(arrAlumnos));
console.log(ordenarArrayObjetosPorNombreYNota(arrAlumnos)); */
/* console.log(ordenarArrayObjetosPorMediaNotas(arrAlumnos));
 */