/**
 * una funcion que hace un contador para atras
 * @param {*} timeStart 
 */
function counterBackwards(timeStart) {
    let finishTime = 0;

    const intervalId = setInterval(() => {
        console.log(timeStart);
        if (timeStart <= finishTime) {
            clearInterval(intervalId);
        }
        timeStart--;
    }, 1000);
}


/**
 * una funcion que muestra cada segundo la hora actual
 */
function clock() {
    setInterval(() => {
        let myDate = new Date();
        console.log(`${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`);
    }, 1000);
}


function counterBackwardsRedirectAtZero(timeStart) {
    let finishTime = 0;

    const intervalId = setInterval(() => {
        console.log(timeStart);
        if (timeStart <= finishTime) {
            clearInterval(intervalId);
            window.location.href = 'https://www.google.com/';
        }
        timeStart--;
    }, 1000);
}



