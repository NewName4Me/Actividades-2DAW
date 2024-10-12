<?php
function tomarArchivoIni()
{
    $archivo = __DIR__ . '/../config/users.ini';
    if (!file_exists($archivo)) {
        return [];
    }

    return $arrayDeUsuarios = parse_ini_file($archivo) ?? [];
}
