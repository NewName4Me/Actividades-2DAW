<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Wall</title>
</head>

<body>
    <h2><?php echo $_SESSION["mensajeDeError"] ?? '' ?></h2>
    <h2>Registrar</h2>
    <form action="./controller/registerController.php" method="GET">
        <input type="text" name="userName" id="userName" placeholder="nombre usuario">
        <input type="password" name="userPassword" id="userPassword" placeholder="contraseña">
        <input type="password" name="userPasswordRepeat" id="userPasswordRepeat" placeholder="repetir contraseña">
        <input type="submit" name="register" id="register">
    </form>
</body>

</html>