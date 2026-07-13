
// JavaScript Practice Program
// Topics Covered:
// 1. Ternary Operator
// 2. Loops
// 3. Functions
// 4. Advanced Function Concepts



// 1. TERNARY OPERATOR PRACTICE


// Example 1
let age = 20;

// Traditional if-else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Using Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Example 2
let number = 10;

let evenOdd = number % 2 === 0 ? "Even Number" : "Odd Number";

console.log(evenOdd);

// Example 3
let marks = 35;

let status = marks >= 35 ? "Pass" : "Fail";

console.log(status);

// 2. LOOP PRACTICE


console.log(" FOR LOOP ");

// Used when number of iterations is known
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log(" WHILE LOOP ");

// Used when the condition is checked before execution
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


console.log("DO WHILE LOOP");

// Executes at least once
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


console.log("FOR IN LOOP ");

// Used to iterate object properties
const student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


console.log(" FOR OF LOOP =====");

// Used to iterate arrays and strings
const colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}


// Infinite Loop (Example Only)


// Never execute this code.


while(true){
    console.log("Infinite Loop");
}

// Best Practice:
// Always update the loop variable.
// Always provide a stopping condition.



// 3. FUNCTIONS PRACTICES
console.log(" FUNCTION WITHOUT PARAMETERS ");

function greet() {
    console.log("Welcome to JavaScript");
}

greet();


console.log(" FUNCTION WITH PARAMETERS ");

function add(a, b) {
    console.log("Addition =", a + b);
}

add(10, 20);


console.log(" DEFAULT PARAMETERS ");

function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome();
welcome("Krishna");


console.log(" ARGUMENTS ");

function multiply(a, b) {
    console.log(a * b);
}

multiply(5, 4);


// 4. ADVANCED FUNCTION CONCEPTS

console.log(" ARGUMENTS OBJECT ");

// Available only in normal functions

function showArguments() {

    console.log(arguments);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

}

showArguments(10, 20, 30, 40);


console.log(" REST PARAMETERS ");

// Rest Parameter stores all values inside an array

function total(...numbers) {

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    console.log("Total =", sum);

}

total(10, 20, 30);
total(5, 10, 15, 20);


console.log(" PARAMETER PRIORITY ");

// Passed argument has higher priority than default value

function display(name = "User", city = "Hyderabad") {
    console.log(name, city);
}

display();
display("Krishna");
display("Krishna", "Bangalore");


console.log("RETURN FUNCTION ");

function square(num) {
    return num * num;
}

let answer = square(6);

console.log(answer);


console.log(" ARROW FUNCTION ");

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 8));



// Difference Between Arguments Object and Rest Parameters


// Arguments Object
function demoArguments() {
    console.log(arguments);
}

demoArguments(1, 2, 3);

// Rest Parameters
function demoRest(...values) {
    console.log(values);
}

demoRest(1, 2, 3);



// MINI ASSIGNMENT

console.log("===== MINI ASSIGNMENT =====");

// Function using loop and default parameter

function printNumbers(limit = 5) {

    console.log("Numbers:");

    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }

}

printNumbers();


// Function using Rest Parameter

function average(...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Average =", total / marks.length);

}

average(80, 90, 70, 85);


// Ternary Operator inside Function

function checkVote(age) {

    let message = age >= 18 ? "Eligible to Vote" : "Not Eligible";

    console.log(message);

}

checkVote(21);
checkVote(15);


// END OF PROGRAM
