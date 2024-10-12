<?php
session_start();
require_once("../helpers/tomarArchivoIni.php");

//variables de session
$_SESSION["usuarioValidado"] = false;

$loginSolicitado = $_REQUEST["login"] ?? null;
$registerSolicitado = $_REQUEST["register"] ?? null;

//Comprobamos que accion a  realizado el usuario para saber a donde redirijirle
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
    $arrayDeUsuarios = array_getArchivoUsuarios();

    //si el usuario no existe le redijimos a la pagina principal de vuelta
    if (!boolUsuarioExiste($name, $arrayDeUsuarios) || $arrayDeUsuarios[$name] != $password) {
        header('Location:..');
        exit;
    }

    //esta parte del codigo solo se ejecutara si el usuario es valido
    $_SESSION["usuarioValidado"] = true;
    header('Location: ../view/userPage.php');
    exit;
}

function register()
{
    $name = $_POST['name'];
    $password = $_POST['password'];
    $passwordRep = $_POST['passwordRep'];
    $arrayDeUsuarios = array_getArchivoUsuarios();

    /* si ambas contraseñas introducidas no son iguales se devuelve al usuario 
    lo suyo sería hacer esto con javascript*/
    if ($password != $passwordRep) {
        header('Location: ..');
        exit;
    }

    //en caso de que el usuario ya exista debo mostrar un mensaje que lo indique
    if (boolUsuarioExiste($name, $arrayDeUsuarios)) {
        header('Location: ..');
        exit;
    }

    //añadimos nuestro usuario al .ini
    void_openAndAddUserArchivoUsuarios($name, $password);

    //volvemos al indice diciendole al usuario que ahora rellene el login con los datos introducidos
    $_SESSION["usuarioValidado"] = true;
    header('Location: ..');
    exit;
}

/**
 * recibe una array con la lista de usuarios y un usuario para comprobar si este existe
 * @return bool true si el usuario existe , false si no
 */
function boolUsuarioExiste($usuario, $archivo)
{
    return array_key_exists($usuario, $archivo);
}
