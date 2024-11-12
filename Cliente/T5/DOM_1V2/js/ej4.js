(() => {
    //variables gloables
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');

    document.addEventListener('DOMContentLoaded', () => {

        form.addEventListener('submit', e => {
            //impido que el formulario intente redirigirme a cualquiera pagina
            e.preventDefault();

            takeFormInfo(e)
                .then(item => appendItemToList(item, ul));

            //reseteo el contenido del formulario para que vuelva a estar limpio por completo
            form.reset();
        });
    });

    /**
     * toma la informacion enviada a traves del formulario
     * @returns {Promise<string>} - contiene el texto enviado a traves del formualrio
     */
    function takeFormInfo() {
        const item = document.querySelector('input[type=text]').value;
        return new Promise(resolve => resolve(item));
    }

    /**
     * agrega un elemento a una lista ordenada o desordenada
     * @param {string} item - elemtneo que queremos añadir a nuestra lista
     * @param {HTMLUListElement} ul - la lista que contiene todos los elementos pasados
     */
    function appendItemToList(item, list) {
        const li = document.createElement('LI');
        li.textContent = item;

        list.appendChild(li);
    }
})();

