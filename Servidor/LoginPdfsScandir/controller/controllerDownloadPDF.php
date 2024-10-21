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

/**
 * The function `descargarPDF` generates a PDF file from HTML content and streams it for download.
 */
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

/**
 * The function "tomarTextoDelArchivo" reads the contents of a file and returns it as a string.
 * 
 * @param file The `tomarTextoDelArchivo` function takes a file path as a parameter and reads the
 * contents of the file using `file_get_contents`. The parameter `` should be a string
 * representing the path to the file from which you want to read the text.
 * 
 * @return The function `tomarTextoDelArchivo()` is returning the contents of the file specified
 * by the `` parameter using the `file_get_contents()` function.
 */

function tomarTextoDelArchivo($file)
{
    return file_get_contents($file);
}
