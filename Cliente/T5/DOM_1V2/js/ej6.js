(() => {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    let currentIndex = 0;
    let images;

    function iniciarApp() {
        const imgsUrl = '../js/listOfImages.json';
        takeImagesApi(imgsUrl)
            .then(listOfImagesResult => renderAllImages(listOfImagesResult))
            .then(() => {
                images = document.querySelectorAll('img');
                makeFirstElementVisible();
            });

        setupButtons();
    }

    /**
     *  procesa toda la informacion de nuestsra api y nos devuelve un JSON con esta
     * @param {URL} url 
     * @returns images  
     */
    async function takeImagesApi(url) {
        const listOfImages = await fetch(url);
        const listOfImagesResultJson = await listOfImages.json();
        return listOfImagesResultJson.images;
    }

    /**
     * carga todas las imagene sque hemos cargado de la api
     * @param {NodeList} listOfImages 
     */
    function renderAllImages(listOfImages) {
        const main = document.querySelector('main');

        listOfImages.forEach(img => {
            const { id, url } = img;
            const imgContainer = document.createElement('IMG');
            imgContainer.setAttribute('data-id', id);
            imgContainer.src = url;
            imgContainer.classList.add('invisible');
            main.appendChild(imgContainer);
        });
    }

    /**
     * hace que el primer elemento de la lista de imagenes sea visibel
     */
    function makeFirstElementVisible() {
        images[currentIndex].classList.remove('invisible');
        images[currentIndex].classList.add('visible');
    }

    /**
     * le damos a cada boton la funcion de ir adelante o atras
     */
    function setupButtons() {
        document.getElementById('next').addEventListener('click', () => changeImage(1));
        document.getElementById('prev').addEventListener('click', () => changeImage(-1));
    }

    /**
     * le decimos en que direccion vamos para así darle a la imagen que corresponda su clase 
     * de visible y eliminar la clase de invisible  
     * @param {Number} direction 
     */
    function changeImage(direction) {
        images[currentIndex].classList.remove('visible');
        images[currentIndex].classList.add('invisible');

        //comprobamos a que indice debemos ir
        currentIndex = updateIndex(currentIndex, direction, images.length);

        images[currentIndex].classList.remove('invisible');
        images[currentIndex].classList.add('visible');
    }

    function updateIndex(index, direction, length) {
        index += direction;
        if (index < 0) index = length - 1;//si es menor a cero vamos al ultimo 
        if (index >= length) index = 0;//si pasamos la longitud volvemos a la primera
        return index;
    }
})();
