// =================================
// First-Class Functions
// =================================


// 1. Store a function in a variable

const greet = function () {
    console.log("Hello JavaScript");
};

greet();


// 2. Pass a function as an argument

function greetUser() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greetUser);


// 3. Return a function

function outer() {
    return function () {
        console.log("Hello from returned function");
    };
}

const result = outer();

result();