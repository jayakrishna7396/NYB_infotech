// Event Loop
// Definition:
// Event Loop checks whether the Call Stack is empty.
// If it is empty, it moves waiting callbacks
// from the queues to the Call Stack.

console.log("Start");

setTimeout(function () {
    console.log("Callback Queue");
}, 0);

Promise.resolve().then(function () {
    console.log("Microtask Queue");
});

console.log("End");
