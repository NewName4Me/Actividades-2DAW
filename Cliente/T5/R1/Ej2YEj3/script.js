document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('p');
    const button = document.querySelector('button');
    const fullText = p.textContent;
    const shortText = fullText.substring(0, 100) + '...';

    p.textContent = shortText;

    button.addEventListener('click', () => {
        if (p.textContent === shortText) {
            p.textContent = fullText;
            button.textContent = 'Ver Menos';
        } else {
            p.textContent = shortText;
            button.textContent = 'Ver Articulo Completo';
        }
    });
});

