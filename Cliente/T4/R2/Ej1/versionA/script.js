window.addEventListener('load', () => {
    const LinkNormal = document.getElementById('normal');
    const LinkMinimalista = document.getElementById('minimalista');

    mostrarContenidoNormal(event);

    LinkNormal.addEventListener('click', e => mostrarContenidoNormal(e));
    LinkMinimalista.addEventListener('click', e => mostrarContenidoMinimalista(e));
});

function mostrarContenidoMinimalista(e) {
    e.preventDefault();

    const elements = document.querySelectorAll('body, header, a, main, .marco, span');
    elements.forEach(element => {
        element.removeAttribute('style');
    });
}

function mostrarContenidoNormal(e) {
    e.preventDefault();

    const body = document.body;
    body.style.margin = 0;
    body.style.marginLeft = '6rem';
    body.style.background = 'aqua';

    const header = document.querySelector('header');
    header.style.background = 'lightgrey';
    header.style.padding = '0.5rem';
    header.style.border = '2px solid grey';

    const aList = document.querySelectorAll('a');
    aList.forEach(a => {
        a.style.textDecoration = 'none';
    });

    const main = document.querySelector('main');
    main.style.background = 'lightyellow';
    main.style.height = '100vh';
    main.style.padding = '1rem';

    const marco = document.querySelector('.marco');
    marco.style.background = 'yellow';
    marco.style.padding = '0.5rem';
    marco.style.border = '1px solid black';

    const span = document.querySelector('span');
    span.style.fontWeight = 'bolder';
    span.style.display = 'block';
}

