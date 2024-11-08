//#region Show List Content
//mostrar lista de elementos por consola dentro del contenido
const listOfHobbies = document.querySelectorAll('#hobby-list .hobby');
listOfHobbies.forEach(hobby => {

    console.log(hobby.getAttribute('data-test'));
    console.log(hobby.textContent);
});

//#region Add P to Div
function addContentToDiv() {
    const div = document.querySelector('div');

    //añadir parrafo con text content
    const PrimerP = document.createElement('P');
    PrimerP.textContent = 'Hola mundo';
    div.appendChild(PrimerP);

    //utilizar texto como nodo
    const segundoP = document.createElement('P');
    const textSegundoP = document.createTextNode('Texto nodo');
    segundoP.appendChild(textSegundoP);
    div.appendChild(segundoP);
}

//#region Add P to Section
function addParrafosToSection() {
    const numeroDeParrafos = 5;
    const section = document.querySelector('section');

    for (let i = 0; i < numeroDeParrafos; i++) {
        const p = document.createElement('P');
        const contenido = document.createTextNode(i);

        p.appendChild(contenido);
        section.appendChild(p);
    }
}


//#region DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    addContentToDiv();
    addParrafosToSection();
});