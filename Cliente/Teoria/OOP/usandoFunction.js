"use strict"

function User(dni, name, age) {
    this.dni = dni;
    this.name = name;
    this.age = age;
    this.showMe = function () {
        return `Nombre:${this.name} \nEdad: ${this.age}`;
    };
}

/* const erik = new User('777', 'erik', 21);
console.table(erik);
console.table(erik.showMe()); */

const listaDeUsuarios = [
    new User('777', 'erik', 21),
    new User('2222', 'felipe', 11),
];
/* console.table(listaDeUsuarios);
 */

class User2 {
    constructor(dni, name, age) {
        this.dni = dni;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}

const erik2 = new User2('777', 'erik', 21);
console.table(erik2);
console.table(erik2.getName());

