export class Timer {
    constructor() {
        this.startTime = null;
        this.elapsedTime = 0;
    }

    /**
     * if the tima has not started, this funcion makes it start at the current second
     * its invoqued
     */
    startTimer() {
        if (!this.startTime) {
            this.startTime = Date.now();
        }
    }

    /**
     * this funcion resets all the passed time back to the initial point
     */
    reset() {
        this.startTime = null;
        this.elapsedTime = 0;
    }

    /**
     * if the startTime wasnt defined yet, it returns 0 as a default
     * @returns {Number} time passed
     */
    getElapsedTime() {
        if (this.startTime) {
            return Math.floor((Date.now() - this.startTime) / 1000) + this.elapsedTime;
        }
        return this.elapsedTime;
    }
}