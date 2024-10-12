<?php
session_start();
require_once("../helpers/tomarArchivoIni.php");

//variables de session
$_SESSION["usuarioValidado"] = false;

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
    $name = $_POST["name"];
    $password = $_POST["password"];
    $arrayDeUsuarios = tomarArchivoIni();

    //si el usuario no existe le redijimos a la pagina principal de vuelta
    if (!boolUsuarioExiste($name, $arrayDeUsuarios)) {
        header('Location:..');
        exit;
    }

    //si la contraseña introducida no es correcte se le redijire al indice
    if ($arrayDeUsuarios[$name] != $password) {
        header('Location: ..');
        exit;
    }

    //esta parte del codigo solo se ejecutara si el usuario es valido
    $_SESSION["usuarioValidado"] = true;
    header('Location: ../view/userPage.php');
    exit;
}

function register()
{
    echo "register";
}

/**
 * recibe una array con la lista de usuarios y un usuario para comprobar si este existe
 * @return bool true si el usuario existe , false si no
 */
function boolUsuarioExiste($usuario, $archivo)
{
    return array_key_exists($usuario, $archivo);
}
