"use strict";
function runLater() {
    console.log("run me now!");
}
setTimeout(runLater, 1000);
let runs = 0;
let intervalId = setInterval(runEverySecond, 40);
function runEverySecond() {
    runs++;
    console.log("Im running every second. This is run number", runs);
    if (runs >= 5) {
        clearInterval(intervalId);
    }
}
function frame() {
    console.log("frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
