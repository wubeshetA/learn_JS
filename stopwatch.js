#!/usr/bin/node
"Stopwatch implementation."
function MyStopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running) {
            throw new Error("Stopwatch is already running");
        }
        this.running = true;
        startTime = new Date();

    }
    this.stop = function(){
        if (!running) {
            throw new Error("Stopwatch is not running");
        }
        this.running = false;
        endTime = new Date();
    }
    const second = (endTime.getTime() - startTime.getTime())/1000
    duration += second;

    Object.defineProperty(this, "duration", {
        get: () => duration
    });

    this.reset = function(){
        startTime = null;
        endTime =  null;
        duration = 0;
        running = false;
    };
}
