class TimerClass {
    constructor() {
        this.time = new Date().getTime();
        this.isRunning = false;
    }

    startTimer() {
        if (!this.isRunning) {
            this.time = new Date().getTime();
            this.isRunning = true;
        }
    }

    resetTimer() {
        this.time = 0;
        this.isRunning = false;
    }

    stopTimer() {
        this.isRunning = false;
    }

    displayTime() {
        if (!this.isRunning) {
            return {
                minutes: 0,
                seconds: 0
            };
        }

        let timeDifference = (new Date().getTime() - this.time);
        let seconds = Math.floor(timeDifference / 1000);
        let minutes = Math.floor(seconds / 60);

        return {
            minutes: minutes % 60,
            seconds: seconds % 60
        };

    }
}

export { TimerClass }; 
