//IIFE que engloba todo
(function () {

    //variables
    var main = document.querySelector('main');
    var primeraCargadaDePagina = './html/hero.html';

    //#region Iniciar App
    function iniciarApp() {
        //hago que al cargar al principio tenga la url indicada
        cargarContenido(primeraCargadaDePagina);
        detectarClickRouter();
    }

    //#region Detectar click
    /**
     * funcion encargada de dectectar la pagina que quiere ver nuestro usuario en cada momento en funcion de que boton
     * estén pulsando
     */
    function detectarClickRouter() {
        let router;

        const btnNavegacion = document.querySelectorAll('nav a');
        btnNavegacion.forEach(btnA => {
            btnA.onclick = (e) => {
                router = e.target.name;
                let htmlParaCargar;

                switch (router) {
                    case "hero": {
                        main.id = 'mainHero';
                        htmlParaCargar = './html/hero.html';
                        break;
                    }
                    case "queSon": {
                        main.id = 'mainQueSon';
                        htmlParaCargar = './html/queson.html';
                        break;
                    }
                    case "ejemplos": {
                        main.id = 'mainEjemplos';
                        htmlParaCargar = './html/ejemplos.html';
                        break;
                    }
                    case "eleccion": {
                        main.id = 'mainEleccion';
                        htmlParaCargar = './html/eleccion.html';
                        break;
                    }
                    case "theme": {
                        htmlParaCargar = "theme";
                        break;
                    }
                }

                if (htmlParaCargar !== "theme") {

                    cargarContenido(htmlParaCargar);
                }

            };
        });
    }

    //#region Cargar Contenido
    /**
     * funcion encargada de tomar el cuerpo de un html y cargarlo en nuestro documento principal
     * @param {*} url 
     */
    function cargarContenido(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Parsear el HTML recibido
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                const bodyContent = doc.body.innerHTML;

                main.innerHTML = bodyContent;

                iniciarEventos();
            });
    }

    //#region Iniciar Eventos
    /**
     * dado que estamos recargando el main hay botoones y elementos que queremos detectar e inicializar, 
     * por tanto los llamamos aqui para que ya existan y se puedan usar sin problema
     */
    function iniciarEventos() {
        const BTN_COMENZAR = document.querySelector('.comenzar') ?? '';
        detectarClickComenzarParaCargarQueSon(BTN_COMENZAR);
    }

    //
    function detectarClickComenzarParaCargarQueSon(btn) {
        if (btn) {
            btn.addEventListener('click', () => {
                main.id = 'mainQueSon';
                const url = './html/queson.html';
                cargarContenido(url);
            });
        }
    }

    //#region DOMContentLoaded
    document.addEventListener('DOMContentLoaded', iniciarApp);

})()

