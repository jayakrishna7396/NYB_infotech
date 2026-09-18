// Throttling
// Definition:
// Throttling means limiting how often a function can run.


// Select the box
let box = document.getElementById("box");


// Throttle function
function throttle(callback, delay) {

    let canRun = true;

    return function () {

        if (!canRun) {
            return;
        }

        callback();

        canRun = false;

        setTimeout(function () {
            canRun = true;
        }, delay);
    };
}


// Function to run
function showMessage() {
    console.log("Mouse moved");
}


// Create throttled function
let throttledFunction = throttle(showMessage, 1000);


// Mousemove event
box.addEventListener("mousemove", throttledFunction);