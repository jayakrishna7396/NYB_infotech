// Hoisting--Hoisting means JavaScript processes
// declarations before executing the code.


// Function Hoisting

greet();

function greet() {
    console.log("Hello Krishna!");
}


// var Hoisting

console.log(age);

var age = 22;

console.log(age);