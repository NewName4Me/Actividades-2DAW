<?php

require('./vendor/autoload.php');

use Dompdf\Dompdf;

$formEnviado = $_REQUEST["dompdf"] ?? null;

if (isset($formEnviado)) {
    descargarPDF();
}

function descargarPDF()
{
    $html = '<h1>Hola mundo erik </h1>';
    $pdf = new Dompdf();

    $pdf->set_paper("A4", "portrait");
    $pdf->load_html(utf8_decode($html));
    $pdf->render();
    $pdf->stream('FicheroEjemplo.pdf');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="#">
        <input type="submit" name="dompdf" value="Descargar PDF">
    </form>
</body>

</html>