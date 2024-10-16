<?php
session_start();

$crearDirectorio = $_REQUEST["crearDirectorio"] ?? null;
$subirArchivoTxt = $_REQUEST["subirArchivoTxt"] ?? null;
$name = $_SESSION["name"] ?? 'Error';

if (isset($crearDirectorio)) {
    crearDirectorio();
} else if (isset($subirArchivoTxt)) {
    subirArchivoTxt();
}

function crearDirectorio()
{
    global $name;
    $dirName = $_REQUEST["dirName"];
    $rootDir = '../uploads/' . $name;

    $fileToCreate = $rootDir . '/' . $dirName;

    if (!file_exists($fileToCreate)) {
        mkdir($fileToCreate);
    }

    header('Location: ../view/userPage.php');
    exit;
}

function subirArchivoTxt()
{
    global $name;
    $contenidoArchivo = $_REQUEST['contenido'] ?? '';
    $nombreArchivo = $_REQUEST['nombreArchivo'] ?? 'archivo';
    $carpetaSeleccionada = $_REQUEST['carpetaSeleccionada'] ?? '';
    $rutaArchivo = '../uploads/' . $name . '/' . $carpetaSeleccionada . '/' . $nombreArchivo . '.txt';

    //si el archivo existe lo reescribe
    if (file_exists($rutaArchivo)) {
        $file = fopen($rutaArchivo, "w");
        fwrite($file, $contenidoArchivo);
        fclose($file);
    }

    header("Location: ../view/userPage.php");
    exit;
}
