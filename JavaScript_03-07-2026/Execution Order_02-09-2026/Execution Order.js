console.log("1 - Start");

setTimeout(function () {
    console.log("4 - Macrotask");
}, 0);

Promise.resolve().then(function () {
    console.log("3 - Microtask");
});

console.log("2 - End");