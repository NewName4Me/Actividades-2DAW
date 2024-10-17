<?php
iniciarApp();

function iniciarApp()
{
    aumentarVisitas();
}

function aumentarVisitas()
{
    $contadorDeVisitasTxt = __DIR__ . "/visitas.ini";

    $archivo = parse_ini_file($contadorDeVisitasTxt, true);

    $visitasAumentadas = $archivo["numVisitas"] ?? 0;
    $visitasAumentadas++;

    $file = fopen($contadorDeVisitasTxt, "w");
    fwrite($file, "numVisitas = " . $visitasAumentadas);
    fclose($file);

    $_SESSION["numVisitas"] = $visitasAumentadas;
}
