import { TimerClass } from './components/TimerClass.js';

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    const timer = new TimerClass();
    const currentTimeElement = document.getElementById('currentTime');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    startButton.addEventListener('click', () => {
        timer.startTimer();
        updateTime();
    });

    stopButton.addEventListener('click', () => {
        timer.stopTimer();
    });

    resetButton.addEventListener('click', () => {
        timer.resetTimer();
        timer.startTimer();
        updateTime();
    });

    function updateTime() {
        if (timer.isRunning) {
            const time = timer.displayTime();
            currentTimeElement.textContent = `${time.minutes}:${time.seconds}`;
            requestAnimationFrame(updateTime);
        }
    }
}

