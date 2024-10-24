<?php
session_start();
require('../model/ModelUser.php');

//INICIALIZACIONES
$_SESSION["mensajeDeError"] = '';
$archivoUsersIni = __DIR__ . '/../users/users.ini';

//PETICIONES
$registerSolicitado = $_REQUEST["register"] ?? null;

//DATOS
$name = $_REQUEST["userName"] ?? null;
$password = $_REQUEST["userPassword"] ?? null;
$passwordRepeat = $_REQUEST["userPasswordRepeat"] ?? null;

if (isset($registerSolicitado)) {
    createUser();
}

function createUser()
{
    global $name;
    global $password;
    global $passwordRepeat;

    if ($password != $passwordRepeat) {
        $mensajeDeError = 'Ambas contraseñas deben ser iguales';
        $_SESSION["mensajeDeError"] = $mensajeDeError;
        header('Location:..');
    }

    $user = new User($name, $password);
    registerUser($user);
}
function registerUser($user)
{
    $arrayDeUsuario = arrar_getArchivoUsuarios();

    // Si el usuario existe mostramos un error dado que no podemos tener dos llamados igual
    if (checkUserExists($user, $arrayDeUsuario)) {
        $mensajeDeError = 'Usuario ya existente';
        $_SESSION["mensajeDeError"] = $mensajeDeError;
        header('Location: ..');
        exit;
    }

    // Añadimos el usuario al archivo ini
    global $archivoUsersIni;
    $archivoUsuarios = fopen($archivoUsersIni, "w");
    $txt = "\n" . $user->getName() . "=" . $user->getPassword();
    fwrite($archivoUsuarios, $txt);
    fclose($archivoUsuarios);

    // Redirigimos a la página principal
    $_SESSION["usuarioValidado"] = true;
    $_SESSION["mensaje"] = "Usuario Registrado Correctamente";
    header('Location: ..');
    exit;
}

function arrar_getArchivoUsuarios()
{
    global $archivoUsersIni;

    if (!file_exists($archivoUsersIni)) {
        return [];
    }

    return parse_ini_file($archivoUsersIni) ?? [];
}

function checkUserExists($user, $file)
{
    return array_key_exists($user->getName(), $file);
}
