
// 1. Function Declaration
// Definition: A function created using the function keyword.

function add(a, b) {
    return a + b;
}

console.log("1. Function Declaration:", add(10, 20));


// 2. Function Expression
// Definition: A function stored inside a variable.

const subtract = function(a, b) {
    return a - b;
};

console.log("2. Function Expression:", subtract(20, 10));


// 3. Arrow Function
// Definition: A shorter way to write a function.

const multiply = (a, b) => {
    return a * b;
};

console.log("3. Arrow Function:", multiply(5, 4));


// 4. Parameters and Arguments
// Parameters: Variables written in the function definition.
// Arguments: Actual values passed when calling the function.

function greet(name) {
    return "Hello " + name;
}

console.log("4. Parameters and Arguments:", greet("John"));


// 5. Default Parameters
// Definition: A default value is used when no argument is provided.

function welcome(name = "Guest") {
    return "Welcome " + name;
}

console.log("5. Default Parameter:", welcome());


// 6. Rest Parameters
// Definition: Collects multiple arguments into an array.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("6. Rest Parameters:", sum(10, 20, 30, 40));


// 7. Arguments Object
// Definition: The arguments object contains all arguments
// passed to a normal function.

function showArguments() {
    console.log("7. Arguments Object:", arguments);
}

showArguments("Apple", "Banana", "Mango");


// 8. Recursive Function
// Definition: A function that calls itself is called a recursive function.

function countdown(number) {
    if (number === 0) {
        return;
    }

    console.log("8. Recursive Function:", number);
    countdown(number - 1);
}

countdown(3);


// 9. Callback Function
// Definition: A function passed as an argument to another function.

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function display(result) {
    console.log("9. Callback Function:", result);
}

calculate(10, 20, display);