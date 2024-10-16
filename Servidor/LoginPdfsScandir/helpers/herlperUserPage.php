<?php

$name = $_SESSION["name"] ?? '';

iniciarApp();
function iniciarApp()
{
    crearCarpetasParaCadaUsuarioSiNoEstaCreada();
}

/**
 * cuando iniciamos sesion con nuestro usuario se dijie a la carpeta uploads y comprueba si
 * tenemos un carpeta creada para nuestros archivos y directorios, si no exite la crea
 */
function crearCarpetasParaCadaUsuarioSiNoEstaCreada()
{
    global $name;

    //compruebo la existencia de la carpeta y otorgo los permisos necesarios
    if (!file_exists('../uploads/' . $name)) {
        mkdir('../uploads/' . $name, 0777, true);
    }
}

/**
 * añade al DOM la lista de archivos y directorios disponibles para el usuario
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
 * se dirije a la carpeta de nuestro usuario y mira todos los archivos y directorios 
 * que esta contiene, agregandolos a una lista
 */
function listarArchivosRecursivamente($directorio)
{
    $archivos = scandir($directorio);

    foreach ($archivos as $archivo) {
        if ($archivo != '.' && $archivo != '..') {
            $rutaCompleta = $directorio . '/' . $archivo;
            echo '<li>' . $archivo;

            if (is_dir($rutaCompleta)) {
                // Si es un directorio, hago una lista recursiva
                echo '<ul>';
                listarArchivosRecursivamente($rutaCompleta);
                echo '</ul>';
            }

            echo '</li>';
        }
    }
}

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
