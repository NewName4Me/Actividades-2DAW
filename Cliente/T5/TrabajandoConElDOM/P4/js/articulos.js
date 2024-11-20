(() => {
    const padreSection = document.querySelector('section:last-of-type');

    const articulos = [
        {
            titulo: 'Artículo 1',
            contenido: 'Contenido del artículo 1',
            url: 'https://picsum.photos/200/300'
        },
        {
            titulo: 'Artículo 2',
            contenido: 'Contenido del artículo 2',
            url: 'https://picsum.photos/200/300'
        },
        {
            titulo: 'Artículo 3',
            contenido: 'Contenido del artículo 3',
            url: 'https://picsum.photos/200/300'
        }
    ];

    function subirListaDeArticulos(padre,lista) {
        const fragment = document.createDocumentFragment();
        
        //recorro todos los elemetnos de nuestra "DB"
        lista.forEach((article, articleIdx) => {
            const articulo = createArticle(article, articleIdx);
            fragment.appendChild(articulo);
        });

        padre.appendChild(fragment);
    }

    function createArticle(article, articleIdx) {
        const { titulo, contenido, url } = article;

        const articulo = document.createElement('ARTICLE');
        const div = document.createElement('DIV');
        const p = document.createElement('P');
        const h2 = document.createElement('H2');
        const img = document.createElement('IMG');

        img.src = url;
        h2.textContent = titulo;
        p.textContent = contenido;

        div.appendChild(h2);
        div.appendChild(p);

        //si es par o impar lo pongo a la izquierda o derecha la imagen
        if (articleIdx % 2 === 0) {
            articulo.appendChild(img);
            articulo.appendChild(div);
        } else {
            articulo.appendChild(div);
            articulo.appendChild(img);
        }

        return articulo;
    }

    subirListaDeArticulos(padreSection,articulos);
})();

