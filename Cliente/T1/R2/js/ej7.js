export function dataFor2DTable() {
    const COLUMNS = parseInt(prompt("Cuantas columnas quieres que tenga"));
    const ROWS = parseInt(prompt("Cuantas filas quieres que tenga"));
    const HEIGHT = parseInt(prompt("Como de alto deben ser las celdas"));
    const WIDHT = parseInt(prompt("Como de ancho deben ser las celdas"));

    createTable(COLUMNS, ROWS, HEIGHT, WIDHT);
}

function createTable(columns, rows, height, width) {
    document.write('<table style="border-collapse: collapse;">');

    for (let i = 0; i < rows; i++) {
        document.write('<tr>');
        for (let j = 0; j < columns; j++) {
            document.write(`<td style="border: 1px solid black; width: ${width}px; height: ${height}px;"></td>`);
        }
        document.write('</tr>');
    }

    document.write('</table>');
}