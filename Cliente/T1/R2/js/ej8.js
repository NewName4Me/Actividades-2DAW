export function dataForChessBoard() {
    const COLUMNS = 8;
    const ROWS = 8;
    const SIZE = parseInt(prompt("Como de grande debe ser cada cuadrado del ajedrez"));

    createTable(COLUMNS, ROWS, SIZE);
}

function createTable(columns, rows, size) {
    document.write('<table style="border-collapse: collapse;"');

    for (let i = 0; i < rows; i++) {
        document.write('<tr>');
        for (let j = 0; j < columns; j++) {
            if ((i + j) % 2 == 0) {
                document.write(`<td style="border: 1px solid black; width: ${size}px; height: ${size}px;"></td>`);
            } else {
                document.write(`<td style="border: 1px solid black; width: ${size}px; height: ${size}px;background:black;"></td>`);
            }
        }
        document.write('</tr>');
    }

    document.write('</table>');
}