// ======================================================
// 1. FUNCTION DECLARATION
// ======================================================

function add(a, b) {
    return a + b;
}

console.log("1. Function Declaration:", add(10, 20));


// ======================================================
// 2. FUNCTION EXPRESSION
// ======================================================

const subtract = function (a, b) {
    return a - b;
};

console.log("2. Function Expression:", subtract(20, 10));


// ======================================================
// 3. NAMED FUNCTION
// ======================================================

const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

console.log("3. Named Function:", multiply(5, 4));


// ======================================================
// 4. ANONYMOUS FUNCTION
// ======================================================

const divide = function (a, b) {
    return a / b;
};

console.log("4. Anonymous Function:", divide(20, 5));


// ======================================================
// 5. ARROW FUNCTION
// ======================================================

const square = (number) => {
    return number * number;
};

console.log("5. Arrow Function:", square(6));


// ======================================================
// 6. CALLBACK FUNCTION
// ======================================================

function calculate(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

console.log("6. Callback Function:", calculate(10, 20, sum));


// Callback using anonymous function
console.log(
    "Callback with Anonymous Function:",
    calculate(5, 3, function (a, b) {
        return a * b;
    })
);


// ======================================================
// 7. HIGHER ORDER FUNCTION
// ======================================================

// A function that receives another function
// or returns another function is called Higher Order Function.

function operation(a, b, operationFunction) {
    return operationFunction(a, b);
}

const result = operation(10, 5, (a, b) => a - b);

console.log("7. Higher Order Function:", result);


// ======================================================
// 8. FIRST-CLASS FUNCTIONS
// ======================================================

// Functions can be:
// 1. Stored in variables
// 2. Passed as arguments
// 3. Returned from functions

const greet = function () {
    return "Hello Krishna";
};

console.log("8. First-Class Function:", greet());


// Function passed as an argument
function executeFunction(fn) {
    return fn();
}

console.log(
    "First-Class Function as Argument:",
    executeFunction(greet)
);


// ======================================================
// 9. DEFAULT PARAMETERS
// ======================================================

function welcome(name = "Guest") {
    return `Welcome ${name}`;
}

console.log("9. Default Parameter:", welcome());
console.log("Default Parameter with Value:", welcome("Krishna"));


// ======================================================
// 10. REST PARAMETERS
// ======================================================

function total(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log("10. Rest Parameters:", total(10, 20, 30, 40));


// ======================================================
// 11. ARGUMENTS OBJECT
// ======================================================

function showArguments() {

    console.log("11. Arguments Object:", arguments);

    for (let i = 0; i < arguments.length; i++) {
        console.log("Argument", i + 1, ":", arguments[i]);
    }
}

showArguments("HTML", "CSS", "JavaScript");


// ======================================================
// 12. GLOBAL SCOPE
// ======================================================

let globalName = "Krishna";

function showGlobalScope() {
    console.log("12. Global Scope:", globalName);
}

showGlobalScope();


// ======================================================
// 13. FUNCTION SCOPE
// ======================================================

function functionScope() {

    let message = "Inside Function";

    console.log("13. Function Scope:", message);
}

functionScope();

// message cannot be accessed here
// console.log(message); // Error


// ======================================================
// 14. BLOCK SCOPE
// ======================================================

function blockScope() {

    if (true) {

        let blockName = "JavaScript";
        const version = "ES6";

        console.log("14. Block Scope:", blockName);
        console.log("Block Scope:", version);
    }

    // blockName and version cannot be accessed here
}

blockScope();


// ======================================================
// 15. LEXICAL SCOPE
// ======================================================

let outerVariable = "Outer Value";

function outerFunction() {

    let innerVariable = "Inner Value";

    function innerFunction() {

        console.log("15. Lexical Scope:");
        console.log("Outer:", outerVariable);
        console.log("Inner:", innerVariable);
    }

    innerFunction();
}

outerFunction();


// ======================================================
// 16. CLOSURES
// ======================================================

function counter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const myCounter = counter();

console.log("16. Closure:", myCounter());
console.log("Closure:", myCounter());
console.log("Closure:", myCounter());


// ======================================================
// 17. IIFE
// Immediately Invoked Function Expression
// ======================================================

(function () {

    console.log("17. IIFE: Function executed immediately");

})();


// IIFE with parameters
(function (name) {

    console.log("IIFE with Parameter:", `Hello ${name}`);

})("Krishna");


// ======================================================
// 18. HOISTING
// ======================================================

// Function declarations are hoisted.

console.log("18. Hoisting:", hoistedFunction());

function hoistedFunction() {
    return "Function declaration is hoisted";
}


// ======================================================
// 19. var, let, const
// ======================================================

// var
var age = 25;
console.log("19. var:", age);

// let
let city = "Rajahmundry";
console.log("let:", city);

// const
const country = "India";
console.log("const:", country);


// var can be reassigned
age = 26;

// let can be reassigned
city = "Hyderabad";

// const cannot be reassigned
// country = "USA"; // Error

console.log("Updated var:", age);
console.log("Updated let:", city);
console.log("const:", country);


// ======================================================
// 20. VAR, LET AND CONST BLOCK SCOPE
// ======================================================

function scopeExample() {

    if (true) {

        var varVariable = "var";
        let letVariable = "let";
        const constVariable = "const";

        console.log("Inside Block - var:", varVariable);
        console.log("Inside Block - let:", letVariable);
        console.log("Inside Block - const:", constVariable);
    }

    // var is function scoped
    console.log("Outside Block - var:", varVariable);

    // let and const are block scoped
    // console.log(letVariable);   // Error
    // console.log(constVariable); // Error
}

scopeExample();

