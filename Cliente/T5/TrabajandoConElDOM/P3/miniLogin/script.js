const listOfUsers = [
    {
        nombre: 'erik',
        password: '1234'
    },
    {
        nombre: 'pepe',
        password: '1111'
    }
];

const loginForm = document.forms.login;

loginForm.addEventListener('submit', (e) => {
    // impido el envio del formulario
    e.preventDefault();

    // tomo los datos del formulario
    const userName = loginForm.name.value.trim();
    const userPass = loginForm.pass.value.trim();

    if (!validateEmptyInputs([userName, userPass])) {
        console.error('Algun dato esta vacio');
        return;
    }

    // valido que los datos enviados se encuentren en nuestra "DB"
    if (!findUser(listOfUsers, userName, userPass)) {
        console.error('Login incorrecto');
        return;
    }

    console.log('Login correcto');

    // limpio el formulario
    loginForm.reset();
});

const validateEmptyInputs = (inputs = []) => inputs.every(input => input !== '');
const findUser = (listOfUsers = [], userName, userPass) => listOfUsers.some(user => user.nombre === userName && user.password === userPass);


