<?php require_once("../helpers/usuarioValidado.php") ?>
<?php require_once("../helpers/herlperUserPage.php") ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina del usuario</title>
    <link rel="stylesheet" href="../public/css/paginaUsuarioCss.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
</head>

<body>
    <section>
        <h2>Operaciones</h2>
        <form action="../controller/UserPageController.php" method="POST">
            <fieldset>
                <legend>Crear una carpeta</legend>
                <input type="text" name="dirName" id="" placeholder="Incia el nombre de la carpeta">
                <button type="submit" name="crearDirectorio">Crear</button>
            </fieldset>
        </form>
        <form action="../controller/UserPageController.php" method="GET">
            <fieldset>
                <legend>Subir un archivo a una carpeta</legend>
                <div class="añadirArchivo">
                    <textarea name="contenido" id="" placeholder="añade un texto a tu archivo txt"></textarea>
                    <input type="text" name="nombreArchivo" placeholder="nombre del archivo">
                    <select name="carpetaSeleccionada" id="">
                        <?php mostrarCarpetasDelUsuario() ?>
                    </select>
                    <button type="submit" name="subirArchivoTxt">Subir archivo</button>
                </div>
            </fieldset>
        </form>
        <form action="../controller/UserPageController.php" method="GET">
            <button type="submit" name="cerrarSesion">Cerrar sesión</h3>
        </form>
    </section>
    <section>
        <h2>Ver directorios</h2>
        <?php mostrarArchivosYCarpetasDelUsuario(); ?>
    </section>
</body>

</html>