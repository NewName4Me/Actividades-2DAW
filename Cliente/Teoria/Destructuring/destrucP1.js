const articulo = {
    precio: 40,
    nombre: 'Raton',
}

const calcularIVA = (objeto) => {
    const { precio } = objeto;
    const IVA = 0.21;
    return (precio * IVA) + precio;
}

console.log(calcularIVA(articulo));

const calcularIVaArrow = ({ precio }) => precio * 1.21;

console.log(calcularIVaArrow(articulo));