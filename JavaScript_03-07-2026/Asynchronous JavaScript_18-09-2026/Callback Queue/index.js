// Callback Queue
// Definition:
// Callback Queue is a waiting area where
// callback functions wait until the Call Stack is empty.

console.log("Start");

setTimeout(function () {
    console.log("Callback executed");
}, 2000);

console.log("End");