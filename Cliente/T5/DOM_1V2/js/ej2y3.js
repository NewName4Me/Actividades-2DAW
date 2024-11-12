(() => {
    let originalText = ''; //variable global para guardar el contenido original del parrafo
    let isCutted = false; 

    document.addEventListener('DOMContentLoaded', () => {
        const cutTextBtn = document.getElementById('cutTextBtn');

        cutTextBtn.addEventListener('click', changeParagraphLenght);
    });


    function changeParagraphLenght() {
        const p = document.querySelector('p');
        const cutTextBtn = document.getElementById('cutTextBtn');
        /* Texto que toma el boton segun el estado del parrafo */
        const btnPosibleTexts = {
            cutted: 'Restaurar texto completo',
            uncut: 'Cortar texto por la mitad'
        };

        //compruebo si el texto está o no cortado en dos
        if (!isCutted) {
            originalText = p.textContent;
            p.textContent = originalText.slice(0, originalText.length / 2);
            cutTextBtn.textContent = btnPosibleTexts.cutted;
            isCutted = true;
        } else {
            p.textContent = originalText;
            cutTextBtn.textContent = btnPosibleTexts.uncut;
            isCutted = false;
        }
    }
})();

