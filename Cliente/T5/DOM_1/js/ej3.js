import { arrArticulos } from '../modulos/articulos.mjs';

document.addEventListener('DOMContentLoaded', () => {
    fetchArrArticulosData(arrArticulos);
});

function fetchArrArticulosData(arr = []) {
    const listOfArticles = document.querySelector('.listOfArticles');

    if (!listOfArticles) throw new Error('No se encontro el contenedor "Lista de Articulos"');

    arr.forEach(item => appendItemToList(item, listOfArticles));
}

function appendItemToList(item = {}, list) {
    const { id, title, price, description, category, image, rating: { rate, count } } = item;

    //creo el contenedor de cada articulo
    const article = document.createElement('ARTICLE');
    article.setAttribute('data-id', id);
    article.classList.add('item');

    const articleTitle = document.createElement('H2');
    const articlePrice = document.createElement('span');
    const articleDescription = document.createElement('p');
    const articleCategory = document.createElement('h4');
    const articleImg = document.createElement('IMG');

    articleTitle.textContent = title;
    articlePrice.textContent = `Precio: ${price} $`;
    articleDescription.textContent = description;
    articleCategory.textContent = `Categoria: ${category}`;
    articleImg.alt = title;
    articleImg.src = image;

    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('ratingContainer');

    const progresBar = document.createElement('progress');
    progresBar.max = 5;
    progresBar.value = rate;

    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = ` ${rate}  `;

    const countSpan = document.createElement('span');
    countSpan.textContent = `(${count})`;

    ratingContainer.appendChild(progresBar);
    ratingContainer.appendChild(ratingSpan);
    ratingContainer.appendChild(countSpan);

    article.appendChild(articleTitle);
    article.appendChild(articlePrice);
    article.appendChild(articleDescription);
    article.appendChild(articleCategory);
    article.appendChild(articleImg);
    article.appendChild(ratingContainer);

    list.appendChild(article);
}

