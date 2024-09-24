export function createMultiplicationTables() {
    for (let i = 1; i <= 10; i++) {
        document.write(`<h2>Tabla del ${i}</h2>`);
        for (let j = 1; j <= 10; j++) {
            let result_producto = i * j;
            document.write(`
                ${i} x ${j} = ${result_producto} <br>
            `);
        }
        document.write('<br>');
    }
}