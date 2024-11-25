const imagenes = document.querySelectorAll('img');

for (const imagen of imagenes) {

    imagen.onmousedown = function (event) {

        let shiftX = event.clientX - imagen.getBoundingClientRect().left;
        let shiftY = event.clientY - imagen.getBoundingClientRect().top;

        imagen.style.position = 'absolute';
        imagen.style.zIndex = 1000;
        document.body.append(imagen);

        moveAt(event.pageX, event.pageY);

        // mueve la pelota a las coordenadas (pageX, pageY)
        // tomando la posición inicial en cuenta
        function moveAt(pageX, pageY) {
            imagen.style.left = pageX - shiftX + 'px';
            imagen.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // mueve la pelota con mousemove
        document.addEventListener('mousemove', onMouseMove);

        // suelta la pelota, elimina el manejador innecesario
        imagen.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            imagen.onmouseup = null;
        };

    };

    imagen.ondragstart = function () {
        return false;
    };

};

