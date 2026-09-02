// =====================================================
// JAVASCRIPT ASYNCHRONOUS PROGRAMMING
// =====================================================


// 1. CALL STACK
// Call Stack = keeps track of functions currently being executed.

console.log("1. Start");


// 2. WEB APIs
// Web APIs are provided by the browser.
// Examples: setTimeout(), fetch(), DOM events.

setTimeout(() => {
  console.log("6. setTimeout");
}, 0);


// 3. PROMISE
// Promise represents a future result.
// States: Pending, Fulfilled, Rejected.

Promise.resolve().then(() => {
  console.log("5. Promise");
});


// 4. ASYNC / AWAIT
// async makes a function return a Promise.
// await pauses that async function until the Promise settles.

async function getData() {

  console.log("3. Async function");

  await Promise.resolve();

  console.log("7. After await");
}

getData();


// 5. CALLBACK QUEUE
// Callback Queue stores callbacks from tasks such as setTimeout()
// after the Web API has completed them.


// 6. MICROTASK QUEUE
// Microtask Queue stores Promise callbacks and continuation
// after await.
// It has higher priority than the Macrotask Queue.


// 7. MACROTASK QUEUE
// Macrotask Queue stores tasks such as setTimeout() callbacks.


// 8. EXECUTION ORDER
// Synchronous code
//       ↓
// Microtasks (Promise / await)
//       ↓
// Macrotasks (setTimeout, etc.)

console.log("2. End");