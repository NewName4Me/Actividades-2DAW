const listOfParagraphs = document.querySelectorAll('article p');
const muestraTodosLosParrafos = (element) => element.forEach(p => console.log(p.textContent));
//muestraTodosLosParrafos(listOfParagraphs);


const article = document.querySelector('article');
const desglosaArticulo = (element) => console.log(element.childNodes)
const desglosaArticuloV2 = (element) => console.log(element.children)
//desglosaArticulo(article);


/**
 * 
 * @param {HTMLElement} element 
 * @param {Number} filter si es 1 muestra solo texto , y si no muestra los elementos 
 */
const desglosaArticuloConFiltro = (element, filter) => {
    if (filter == 0) {
        for (const ele of element.childNodes) {
            if (ele.nodeName !== "#text") console.log(ele);
        }
    } else {
        for (const ele of article.childNodes) {
            if (ele.nodeName === "#text") console.log(ele);
        }
    }
}
//desglosaArticuloConFiltro(article, 0);


function muestraElementosDelDOM(element) {
    console.log(element.tagName);
    for (const ele of element.childNodes) {
        if (ele.tagName !== undefined) {
            muestraElementosDelDOM(ele) //recurisvadad para leer los hijos
        }
    }
}

//muestraElementosDelDOM(article)


const sectionPadre = document.querySelector('section:last-of-type');

/**
 * 
 * @param {HTMLElement} padre 
 * @param {URL} url 
 */
const agregarArticulo = (padre, url) => {
    const article = document.createElement('ARTICLE');
    const div = document.createElement('DIV');
    const p = document.createElement('P');
    const h2 = document.createElement('H2');
    const img = document.createElement('IMG');

    img.src = url;
    h2.textContent = 'Prueba rapida'
    p.textContent = 'lorem'

    div.appendChild(h2);
    div.appendChild(p);

    article.appendChild(img);
    article.appendChild(div);


    padre.appendChild(article);

}
//agregarArticulo(sectionPadre, 'https://imgs.search.brave.com/AQ3ur5zT9VUSIqSimPpo27dBQpmshKI33rZkgLmSGxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmF0aW9uYWxn/ZW9ncmFwaGljLmVz/L2ZpbGVzL3N0eWxl/cy9pbWFnZV8zMjAw/L3B1YmxpYy83NTU1/Mi5uZ3N2ZXJzaW9u/LjE0MjIyODU1NTMz/NjAud2VicD93PTE2/MDAmaD0xMDY3');