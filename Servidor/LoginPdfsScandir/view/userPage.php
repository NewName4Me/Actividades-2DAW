<?php
session_start();

if (!$_SESSION["usuarioValidado"]) {
    header("Location: ..");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina del usuario</title>
</head>

<body>

</body>

</html>