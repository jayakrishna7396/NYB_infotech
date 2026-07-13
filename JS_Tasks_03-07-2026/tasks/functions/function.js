//function types

//function drclartion
// function declaration is defined using the function keyword. It is hoisted, so it can be called before its definition.
// Function Declaration

greet();

function greet() {
    console.log("Welcome to JavaScript");
}

//function expression
// A function expression stores a function inside a variable.
const greet = function () {
    console.log("Hello Everyone");
};

greet();


//named function
const square = function findSquare(num) {
    return num * num;
};

console.log(square(5));


//Anonymous Function

let add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

//arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));

//Fibonacci Series
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 7; i++) {
    console.log(fibonacci(i));
}

//var,let and const
//var
var name = "krishna";
var name = "jaya";

console.log(name);

//let
let age = 20;
age = 25;

console.log(age);

//const
const PI = 3.1415;

console.log(PI);

//variable hositing
//let var and const
//var
console.log(a);

var a = 100;

//let
console.log(b);

let b = 200;

//const
console.log(c);

const c = 300;

//function hoisting
//function declartion
hello();

function hello() {
    console.log("Hello");
}

//function expression

sayHi();

var sayHi = function() {
    console.log("Hi");
};


//Arrow Function Hoisting
greet();

const greet = () => {
    console.log("Good Morning");
};


//callback function
function addStudent(name, callback) {
    console.log(name + " added.");
    callback();
}

function showMessage() {
    console.log("Student saved successfully.");
}

addStudent("John", showMessage);


//timer function
let count = 5;

let timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Time Up!");
    }
}, 1000);