import { arrClientes } from '../modulos/articulos.mjs';

document.addEventListener('DOMContentLoaded', () => {
    fetchListOfClientsApi(arrClientes);
});

function fetchListOfClientsApi(arr = []) {
    const listOfClientsContainer = document.querySelector('.listOfClientsContainer');

    //compruebo que la lista existe si no lanzo un error
    if (!listOfClientsContainer) throw new Error('Lista no existente');

    arr.forEach(client => {
        appendClientToContainer(client, listOfClientsContainer);
    });
}

function appendClientToContainer(client, container) {
    const { codigo, dni, Nombre, edad } = client;

    //creo el contenedor de los clientes
    const article = document.createElement('ARTICLE');
    article.classList.add('client');

    //creo un elemento para cada propiedad
    const clientName = document.createElement('h3');
    const clientCode = document.createElement('p');
    const clientId = document.createElement('p');
    const clientAge = document.createElement('p');

    //le añado el contenido a cada elemento
    clientName.textContent = `Nombre: ${Nombre}`;
    clientCode.textContent = `Codigo: ${codigo}`;
    clientId.textContent = `DNI: ${dni}`;
    clientAge.textContent = `Edad: ${edad}`;

    //agrego todos los elementos al articulo
    article.appendChild(clientName);
    article.appendChild(clientId);
    article.appendChild(clientCode);
    article.appendChild(clientAge);

    container.appendChild(article);
}
