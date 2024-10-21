<?php
require('../vendor/autoload.php');

use Dompdf\Dompdf;

$descargarPDF = $_REQUEST["descargarPDF"] ?? null;
$descargarOriginal = $_REQUEST["descargarOriginal"] ?? null;
$hacerUnaCopia = $_REQUEST["hacerUnaCopia"] ?? null;
$eliminar = $_REQUEST["eliminar"] ?? null;

$fileName = $_POST['fileName'] ?? null;
$rutaCompleta = $_POST['rutaCompleta'] ?? null;
$name = $_SESSION["name"] ?? '';

if (isset($descargarPDF)) {
    descargarPDF();
} else if (isset($descargarOriginal)) {
    descargarOriginal();
} else if (isset($hacerUnaCopia)) {
    hacerUnaCopia();
} else if (isset($eliminar)) {
    eliminar();
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

function descargarOriginal()
{
    global $rutaCompleta;
    header("Content-disposition: attachment; filename=$rutaCompleta");
    header("Content-type: application/txt");
    readfile("$rutaCompleta");
}

function hacerUnaCopia()
{
    global $rutaCompleta;

    $rutaCopia = substr($rutaCompleta, 0, strrpos($rutaCompleta, '/')) . '/Copia de ' . basename($rutaCompleta);
    copy($rutaCompleta, $rutaCopia);

    header("Location: ../view/userPage.php");
    exit;
}

function eliminar()
{
    global $rutaCompleta;
    unlink($rutaCompleta);
    header("Location: ../view/userPage.php");
    exit;
}
