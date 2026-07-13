// Immediately Invoked Function Expression (IIFE)
// Definition
// An IIFE (Immediately Invoked Function Expression) is a function that executes immediately after it is defined. It helps create a private scope and avoids polluting the global namespace.

//simple iife
(function () {
    console.log("Welcome to JavaScript");
})();


//iife with parameters
(function (name) {
    console.log("Hello " + name);
})("Krishna");

// arrow function iife
(() => {
    console.log("Arrow Function IIFE");
})();


//closure
// A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();
result();


//function as arugument
// JavaScript allows functions to be passed as arguments to other functions.
function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Krishna");
}

process(greet);


//function returning function
function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Krishna");
}

process(greet);


//pure function
// A pure function
// Always returns the same output for the same input.
// Does not modify external variables or produce side effects.

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));


//impure function
// An impure function:
// Depends on or modifies external data.
// May return different outputs for the same inputs.
let total = 0;

function add(value) {
    total += value;
    return total;
}

console.log(add(5));
console.log(add(5));


//pratical sceniors
//pure function
function calculateDiscount(price, discount) {
    return price - discount;
}

console.log(calculateDiscount(1000, 100));

//impure function
let discount = 100;

function calculate(price) {
    return price - discount;
}

console.log(calculate(1000));

discount = 200;

console.log(calculate(1000));



//event handling
button.addEventListener("click", showMessage);

//call back
setTimeout(showMessage, 3000);

//array method
const numbers = [1, 2, 3, 4];

const squares = numbers.map(function (n) {
    return n * n;
});

console.log(squares);

//api calls
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));



//custom oerators
function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(10, 5, (x, y) => x * y));

