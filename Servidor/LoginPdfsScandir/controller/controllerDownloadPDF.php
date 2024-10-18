<?php
require('../vendor/autoload.php');

use Dompdf\Dompdf;

$descargarPDF = $_REQUEST["descargarPDF"] ?? null;
$fileName = $_POST['fileName'] ?? null;
$rutaCompleta = $_POST['rutaCompleta'] ?? null;
$name = $_SESSION["name"] ?? '';

if (isset($descargarPDF)) {
    descargarPDF();
}

function descargarPDF()
{
    global $rutaCompleta;

    $html = tomarTextoDelArchivo($rutaCompleta);
    $dompdf = new Dompdf();
    $dompdf->set_paper("A4", "portrait");
    $dompdf->load_html(utf8_decode($html));
    $dompdf->render();
    $dompdf->stream($rutaCompleta . '.pdf');
}

function tomarTextoDelArchivo($file)
{
    return file_get_contents($file);
}
