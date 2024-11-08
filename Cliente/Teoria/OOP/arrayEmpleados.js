class User {
    constructor(dni, name, age) {
        this.dni = dni;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    /* Acumular objetos dentro de la clase en lugar de fuera, prueba */
    static users = [];
    static addUsers(user) {
        this.users.push(user);
    }
}

const listaDeUsuarios = [
    new User('777', 'erik', 21),
    new User('2222', 'felipe', 11),
];

listaDeUsuarios.forEach(user => User.addUsers(user));
console.log(User.users);
