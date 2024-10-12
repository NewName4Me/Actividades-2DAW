<?php
session_start();
require_once("../helpers/tomarArchivoIni.php");

$loginSolicitado = $_REQUEST["login"] ?? null;
$registerSolicitado = $_REQUEST["register"] ?? null;

//Vemos que ha solicitado el usuario
if (isset($loginSolicitado)) {
    login();
} else if (isset($registerSolicitado)) {
    register();
}

/**
 * funcion que comprueba que el usuario insertado es el correcto comprobando la contraseña 
 * y nombre, en caso de no serlo de redirijimos al indice y mostramos un error
 */
function login()
{
    var_dump(tomarArchivoIni());
}

function register()
{
    echo "register";
}
