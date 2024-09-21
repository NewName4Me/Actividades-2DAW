export function controlParental() {
    //asignamos la palabra clave
    const palabraClave = "Suárez";
    let inicioSesionUsuario;

    //preguntamos infinitamente hasta que acierten la pregunta
    do {
        inicioSesionUsuario = prompt("Cuál era el apellido del primer presidente español de la democracia");
    } while (palabraClave !== inicioSesionUsuario);
}