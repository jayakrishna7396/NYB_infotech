
// Synchronous JavaScript
// Definition:
// Executes one task at a time.

console.log("Start");

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("End");


// Asynchronous JavaScript
// Definition:
// Executes some tasks later without waiting.

console.log("Start Async");

setTimeout(function () {
    console.log("Task 1");
}, 3000);

console.log("Task 2");
console.log("Task 3");

console.log("End Async");
