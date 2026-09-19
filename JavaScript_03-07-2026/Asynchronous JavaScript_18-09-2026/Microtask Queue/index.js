// Microtask Queue
// Definition:
// Microtask Queue stores high-priority asynchronous
// callbacks such as Promise callbacks.

console.log("Start");

setTimeout(function () {
    console.log("Callback Queue");
}, 0);

Promise.resolve().then(function () {
    console.log("Microtask Queue");
});

console.log("End");
