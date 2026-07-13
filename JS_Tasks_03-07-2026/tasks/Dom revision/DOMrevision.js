//creating element
let p = document.createElement("p");

p.textContent = "Hello";

document.body.appendChild(p);

//removing element
document.getElementById("msg").remove();

//eventlisterner
button.addEventListener("click", function(){

console.log("Clicked");

});

//settimeout
setTimeout(function () {
    console.log("Hello");
}, 3000);

//setinterval
setInterval(function () {
    console.log("Hello");
}, 1000);

//cleartimeout
let timer = setTimeout(function () {
    console.log("Hello");
}, 5000);

clearTimeout(timer);

console.log("Cancelled");

//clear interval
let count = 0;

let timer = setInterval(function () {

    count++;

    console.log(count);

    if (count === 5) {
        clearInterval(timer);
    }

}, 1000);

//Synchronous Execution
// in synchronous execution, JavaScript executes code line by line. Each statement waits for the previous one to finish
console.log("Start");

console.log("Learning JavaScript");

console.log("End");

//Asynchronous Execution
// In asynchronous execution, some operations (such as timers, API calls, or events) are scheduled to run later, allowing the rest of the code to continue immediately.
console.log("Start");

setTimeout(function () {
    console.log("Hello");
}, 2000);

console.log("End");



