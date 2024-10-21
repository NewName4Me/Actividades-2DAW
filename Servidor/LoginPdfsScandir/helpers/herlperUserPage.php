<?php

$name = $_SESSION["name"] ?? '';

iniciarApp();
function iniciarApp()
{
    crearCarpetasParaCadaUsuarioSiNoEstaCreada();
}

/**
 * cuando iniciamos sesión con nuestro usuario se dirige a la carpeta uploads y comprueba si
 * tenemos una carpeta creada para nuestros archivos y directorios. Si no existe, la crea.
 */
function crearCarpetasParaCadaUsuarioSiNoEstaCreada()
{
    global $name;

    // Compruebo la existencia de la carpeta y otorgo los permisos necesarios
    if (!file_exists('../uploads/' . $name)) {
        mkdir('../uploads/' . $name, 0777, true);
    }
}

/**
 * Añade al DOM la lista de archivos y directorios disponibles para el usuario
 */
function mostrarArchivosYCarpetasDelUsuario()
{
    global $name;
    $directorio = '../uploads/' . $name;

    if (file_exists($directorio)) {
        echo '<div id="contenedor-archivos">';
        echo '<ul>';
        listarArchivosRecursivamente($directorio);
        echo '</ul>';
        echo '</div>';
    } else {
        // Manejo de errores si el directorio no existe
        echo '<div id="contenedor-archivos">No se encontraron archivos.</div>';
    }
}

/**
 * Se dirige a la carpeta del usuario y revisa todos los archivos y directorios 
 * que contiene, agregándolos a una lista.
 */
function listarArchivosRecursivamente($directorio)
{
    $archivos = scandir($directorio);

    foreach ($archivos as $archivo) {
        if ($archivo != '.' && $archivo != '..') {
            $rutaCompleta = $directorio . '/' . $archivo;

            // Si es un archivo .txt, lo mostramos como un enlace
            if (is_file($rutaCompleta) && pathinfo($archivo, PATHINFO_EXTENSION) == 'txt') {
                echo
                '<li>
                    <a href="' . $rutaCompleta . '" target="_blank">' . $archivo . '</a>
                    <form method="POST" action="../controller/accionesDirectorios.php" style="display:inline;">
                        <input type="hidden" name="rutaCompleta" value="' . $rutaCompleta . '">
                        <input type="hidden" name="fileName" value="' . $archivo . '">
                        <input type="submit" value="Dowwload" name="descargarOriginal">
                        <input type="submit" value="Down.PDF" name="descargarPDF">
                        <input type="submit" value="Copy" name="hacerUnaCopia">
                        <input type="submit" value="Delete" name="eliminar">
                    </form>
                </li>';
            } else {
                echo '<li>' . $archivo;

                // Si es un directorio, hacemos una lista recursiva
                if (is_dir($rutaCompleta)) {
                    echo '<ul>';
                    listarArchivosRecursivamente($rutaCompleta);
                    echo '</ul>';
                }
                echo '</li>';
            }
        }
    }
}

/* Esta es la parte de crear carpetas */
function mostrarCarpetasDelUsuario()
{
    global $name;
    $directorio = '../uploads/' . $name;

    if (file_exists($directorio)) {
        listarCarpetasCreadas($directorio);
    }
}

function listarCarpetasCreadas($directorio)
{
    $archivos = scandir($directorio);

    foreach ($archivos as $archivo) {
        if (is_dir($directorio . '/' . $archivo) && $archivo != '..') {
            echo "<option>";
            echo $archivo;
            echo "</option>";
        }
    }
}
