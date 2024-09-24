export function getTableAtributesWithBlackTiles() {
    //Atributos tabla que pedimos al usuario
    const NUM_COLUMNS = prompt("Cuántas columnas quieres?");
    const HEIGHT_TABLE = prompt("Como de alta quieres que sea?");
    const WIDTH_TABLE = prompt("Como de ancha quieres que sea la tabla?");

    createTable(NUM_COLUMNS, HEIGHT_TABLE, WIDTH_TABLE);
}

function createTable(numColumns, heightTable, widhtTable) {
    console.log(numColumns);

    //abriimos las tablas
    document.write(`
        <table style="border-collapse: collapse;">
            <tr>`);

    //introducimos las columasn
    for (let i = 0; i < numColumns; i++) {
        if (i % 2 == 0) {
            document.write(`<td style="border:2px solid black;background:black;color:white;width: ${widhtTable}px; height: ${heightTable}px;"></td>`);
        } else {
            document.write(`<td style="border:2px solid black;width: ${widhtTable}px; height: ${heightTable}px;"></td>`);
        }
    }

    //ceramoos las tabla
    document.write(`
            </tr>
        </table>    
    `);

}