document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputText = document.querySelector('input[type=text]').value;

        appendContentToUl(inputText);
        form.reset();
    });

    function appendContentToUl(text) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
});

