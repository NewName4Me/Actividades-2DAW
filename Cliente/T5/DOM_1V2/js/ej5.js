(() => {
    const form = document.querySelector('form');
    const addFilesBtn = document.querySelector('button');

    document.addEventListener('DOMContentLoaded', () => {
        addFilesBtn.addEventListener('click', addInputFilesToForm);
        form.addEventListener('submit', e => processListOfFilesSended(e));
    });

    function addInputFilesToForm() {
        const inputFilesContainer = document.querySelector('.inputFilesContainer');

        const inputFile = document.createElement('INPUT');
        inputFile.type = 'file';

        inputFilesContainer.appendChild(inputFile);
    }

    function processListOfFilesSended(e) {
        e.preventDefault();

        const listOfFiles = Array.from(document.querySelectorAll('input[type=file]'))
            .filter(file => file.files.length > 0);

        alert(`Numero de archivos a enviar : ${listOfFiles.length}`)
    }

})();
