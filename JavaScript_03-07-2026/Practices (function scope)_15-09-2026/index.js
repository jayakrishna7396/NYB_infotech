
// 1. Function Declaration
// Definition: A function created using the function keyword.

function add(a, b) {
    return a + b;
}

function problem1() {
    let result = add(10, 20);

    console.log("Problem 1:", result);

    document.getElementById("result1").textContent =
        "Result: " + result;
}


// 2. Function Expression
// Definition: A function stored inside a variable.

const square = function (number) {
    return number * number;
};

function problem2() {
    let result = square(5);

    console.log("Problem 2:", result);

    document.getElementById("result2").textContent =
        "Square: " + result;
}


// 3. Arrow Function
// Definition: A shorter way to write a function using =>.

const maximum = (a, b) => {
    return a > b ? a : b;
};

function problem3() {
    let result = maximum(25, 40);

    console.log("Problem 3:", result);

    document.getElementById("result3").textContent =
        "Maximum: " + result;
}


// 4. Default Parameters
// Definition: A default value is used when no argument is provided.

function greet(name = "Guest") {
    return "Hello " + name;
}

function problem4() {
    let result1 = greet();
    let result2 = greet("Krishna");

    console.log("Problem 4:", result1);
    console.log("Problem 4:", result2);

    document.getElementById("result4").innerHTML =
        result1 + "<br>" + result2;
}


// 5. Rest Parameters
// Definition: Rest parameters collect multiple arguments into an array.

function calculateTotal(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

function problem5() {
    let result = calculateTotal(10, 20, 30, 40);

    console.log("Problem 5:", result);

    document.getElementById("result5").textContent =
        "Total: " + result;
}


// 6. Callback Function
// Definition: A function passed as an argument to another function.

function calculate(a, b, callback) {
    return callback(a, b);
}

function addNumbers(a, b) {
    return a + b;
}

function problem6() {
    let result = calculate(10, 20, addNumbers);

    console.log("Problem 6:", result);

    document.getElementById("result6").textContent =
        "Callback Result: " + result;
}


// 7. Higher Order Function
// Definition: A function that accepts another function or returns a function.

function operation(a, b, callback) {
    return callback(a, b);
}

const multiply = (a, b) => a * b;

function problem7() {
    let result = operation(5, 4, multiply);

    console.log("Problem 7:", result);

    document.getElementById("result7").textContent =
        "Multiplication: " + result;
}


// 8. Scope
// Definition: Scope determines where a variable can be accessed.

// Global Scope
// Definition: A variable declared outside functions or blocks.

let globalName = "Krishna";

function problem8() {

    // Function Scope
    // Definition: A variable declared inside a function.

    let functionMessage = "Function Scope";

    console.log("Global:", globalName);
    console.log("Function:", functionMessage);

    // Block Scope
    // Definition: A variable declared inside { } using let or const.

    if (true) {

        let blockMessage = "Block Scope";

        console.log("Block:", blockMessage);
    }

    document.getElementById("result8").innerHTML =
        "Global Scope: " + globalName + "<br>" +
        "Function Scope: " + functionMessage + "<br>" +
        "Block Scope: Available inside { } only";
}


// 9. Closure
// Definition: A closure allows a function to remember variables from its outer function.

function createCounter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

function problem9() {

    let result = counter();

    console.log("Problem 9:", result);

    document.getElementById("result9").textContent =
        "Counter: " + result;
}


// 10. IIFE
// Definition: A function that is executed immediately after it is created.

function problem10() {

    let message;

    (function () {

        message = "IIFE executed immediately!";

        console.log(message);

    })();

    document.getElementById("result10").textContent =
        message;
}


// ### Easy to remember
// | Topic                 | Simple meaning                      |
// | --------------------- | ----------------------------------- |
// | Function Declaration  | Normal function                     |
// | Function Expression   | Function stored in variable         |
// | Arrow Function        | Short function syntax               |
// | Default Parameter     | Default value for parameter         |
// | Rest Parameter        | Collects multiple arguments         |
// | Callback              | Function passed to another function |
// | Higher Order Function | Accepts or returns a function       |
// | Scope                 | Where a variable can be used        |
// | Closure               | Function remembers outer variables  |
// | IIFE                  | Function runs immediately           |
