console.log("Start");

setTimeout(function () {
    console.log("Macrotask");
}, 0);

Promise.resolve().then(function () {
    console.log("Microtask");
});

console.log("End");