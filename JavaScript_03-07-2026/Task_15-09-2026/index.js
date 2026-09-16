
// 1. FUNCTION DECLARATION
function greet(name) {
    return "Hello " + name;
}


// 2. FUNCTION EXPRESSION
const welcome = function (name) {
    return "Welcome " + name;
};


// 3. ARROW FUNCTION
const multiply = (a, b) => {
    return a * b;
};


// Display Different Functions

function runFunctionExamples() {

    let result1 = greet("Krishna");

    let result2 = welcome("Krishna");

    let result3 = multiply(5, 4);

    console.log(result1);
    console.log(result2);
    console.log("Multiplication:", result3);

    document.getElementById("functionResult").innerHTML =
        result1 + "<br>" +
        result2 + "<br>" +
        "Multiplication: " + result3;
}



// 4. CONVERT NORMAL FUNCTION INTO ARROW FUNCTION
// Normal Function

function addNormal(a, b) {
    return a + b;
}

// Arrow Function

const addArrow = (a, b) => a + b;


function runArrowFunction() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = addArrow(num1, num2);

    console.log("Arrow Function Result:", result);

    document.getElementById("arrowResult").textContent =
        "Result: " + result;
}



// 5. CALLBACK FUNCTION
// Callback Function

function greetUser(name) {

    console.log("Hello " + name);

    return "Hello " + name;
}


// Function accepting another function

function processUser(callback) {

    return callback("Krishna");
}


function runCallback() {

    let result = processUser(greetUser);

    console.log("Callback Result:", result);

    document.getElementById("callbackResult").textContent =
        result;
}




// 6. HIGHER ORDER FUNCTION
// Higher Order Function
// It accepts another function as an argument.

function calculate(a, b, operation) {

    return operation(a, b);
}


// Functions passed to calculate()

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiplyNumbers = (a, b) => a * b;


function runHigherOrderFunction() {

    let addition = calculate(20, 10, add);

    let subtraction = calculate(20, 10, subtract);

    let multiplication = calculate(
        20,
        10,
        multiplyNumbers
    );

    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);

    document.getElementById("higherOrderResult").innerHTML =
        "Addition: " + addition + "<br>" +
        "Subtraction: " + subtraction + "<br>" +
        "Multiplication: " + multiplication;
}


// 7. GLOBAL SCOPE
let globalName = "Krishna";


function showGlobalScope() {

    console.log("Global Variable:", globalName);

}




// 8. FUNCTION SCOPE
function showFunctionScope() {

    let message = "This is Function Scope";

    console.log(message);

}



// 9. BLOCK SCOPE
function showBlockScope() {

    if (true) {

        let age = 22;

        const city = "Rajahmundry";

        console.log("Age:", age);
        console.log("City:", city);

    }

}


function runScopeExample() {

    showGlobalScope();

    showFunctionScope();

    showBlockScope();

    document.getElementById("scopeResult").innerHTML =
        "Global Scope → Accessible throughout the program.<br>" +
        "Function Scope → Accessible inside the function.<br>" +
        "Block Scope → Accessible inside the block.";
}


// 10. var, let and const
function runVariableExample() {

    // var
    var name = "Krishna";

    // let
    let age = 22;

    // const
    const country = "India";

    console.log("var:", name);
    console.log("let:", age);
    console.log("const:", country);


    // Reassign var
    name = "Rahul";

    // Reassign let
    age = 23;

    console.log("var after reassignment:", name);
    console.log("let after reassignment:", age);


    document.getElementById("variableResult").innerHTML =
        "var → Can be reassigned and redeclared.<br>" +
        "let → Can be reassigned but not redeclared.<br>" +
        "const → Cannot be reassigned.";
}


// 11. HOISTING
function runHoistingExample() {

    // Function can be called before declaration

    hoistedFunction();

    function hoistedFunction() {

        console.log("Function Hoisting works!");

    }


    // var is hoisted with undefined

    console.log("Before declaration:", hoistedName);

    var hoistedName = "Krishna";

    console.log("After declaration:", hoistedName);


    document.getElementById("hoistingResult").innerHTML =
        "Function Hoisting → Function can be called before declaration.<br>" +
        "var Hoisting → Variable initially gives undefined.";
}


// 12. IIFE
function runIIFE() {

    let result;

    (function () {

        result = "IIFE executed immediately!";

        console.log(result);

    })();


    document.getElementById("iifeResult").textContent =
        result;
}



// 13. CLOSURE
function createCounter() {

    let count = 0;


    function increment() {

        count++;

        return count;

    }


    return increment;
}


// Create Closure

const counter = createCounter();


function increaseCounter() {

    let result = counter();

    console.log("Counter:", result);

    document.getElementById("counterResult").textContent =
        "Counter: " + result;
}