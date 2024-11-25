const stylesLink = document.createElement('link');
stylesLink.rel = 'stylesheet';

window.addEventListener('load', () => {
    const LinkNormal = document.getElementById('normal');
    const LinkMinimalista = document.getElementById('minimalista');

    LinkNormal.addEventListener('click', e => mostrarContenidoNormal(e));
    LinkMinimalista.addEventListener('click', e => mostrarContenidoMinimalista(e));
});


function mostrarContenidoMinimalista(e) {
    e.preventDefault();
    const link = document.head.querySelector('link[rel="stylesheet"]');
    if (link) {
        document.head.removeChild(link);
    }

}

function mostrarContenidoNormal(e) {
    e.preventDefault();
    document.head.appendChild(stylesLink);
    stylesLink.href = './styles.css';

}



