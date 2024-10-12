<?php
$archivo = __DIR__ . '/../config/users.ini';

/**
 * funcion que nos devuelve al archivo .ini con los usuarios como array
 */
function array_getArchivoUsuarios()
{
    global $archivo;

    if (!file_exists($archivo)) {
        return [];
    }

    return parse_ini_file($archivo) ?? [];
}

function void_openAndAddUserArchivoUsuarios($usuario, $password)
{
    global $archivo;

    $archivoUsuarios = fopen($archivo, "a");
    $txt = "\n$usuario= $password";
    fwrite($archivoUsuarios, $txt);
    fclose($archivoUsuarios);
}
