//#region Ej1
function obtenerNumeroDeEnlaces() {
    const NumeroDeEnlaces = document.querySelectorAll('a');
    return NumeroDeEnlaces.length;
}

function obtenerHrefPenultimoEnlace() {
    const penultimoEnlace = document.querySelectorAll('a');
    return penultimoEnlace[penultimoEnlace.length - 2].getAttribute('href');
}

function obtenerNumeroDeEnlacesAGoogle() {
    const enlacesAGoogle = document.querySelectorAll('a[href*="google"]');
    return enlacesAGoogle.length;
}

function obtenerNumeroDeEnlacesTercerParrafo() {
    const enlacesTercerParrafo = document.querySelectorAll('p:nth-child(3) a');
    return enlacesTercerParrafo.length;
}

