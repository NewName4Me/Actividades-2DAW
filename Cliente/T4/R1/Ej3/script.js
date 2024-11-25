window.onload = () => {
    let tiempoTranscurrido = 0;
    setInterval(() => {
        tiempoTranscurrido++;
        console.log(`La pagina se cargo hace ${tiempoTranscurrido}`);
    }, 1000);
}
