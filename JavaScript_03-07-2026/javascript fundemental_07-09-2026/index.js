// =====================================================
// 1. INTRODUCTION TO JAVASCRIPT
// =====================================================
// Definition:
// JavaScript is a programming language used to make
// web pages interactive and dynamic.

console.log("Welcome to JavaScript!");


// =====================================================
// 2. VARIABLES
// =====================================================
// Definition:
// Variables are containers used to store data.

// var
// Definition: Older way to declare a variable.
var name = "Jay";

// let
// Definition: Used when the value can be changed.
let age = 25;
age = 26;

// const
// Definition: Used when the value should not be reassigned.
const country = "India";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);


// =====================================================
// 3. JAVASCRIPT DATA TYPES
// =====================================================
// Definition:
// Data types define what kind of value a variable stores.


// ---------- Primitive Data Types ----------
// Definition:
// Primitive data types store a single/basic value.

let studentName = "Rahul";  // String
let marks = 85;             // Number
let isPassed = true;        // Boolean
let result;                 // Undefined
let emptyValue = null;      // Null

console.log(studentName);
console.log(marks);
console.log(isPassed);
console.log(result);
console.log(emptyValue);


// ---------- Reference Data Types ----------
// Definition:
// Reference data types store collections of values
// or objects.

// Object
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

// Array
let subjects = ["HTML", "CSS", "JavaScript"];

console.log(student);
console.log(subjects);


// =====================================================
// 4. typeof OPERATOR
// =====================================================
// Definition:
// typeof is used to find the data type of a value.

console.log(typeof studentName); // string
console.log(typeof marks);       // number
console.log(typeof isPassed);    // boolean
console.log(typeof result);      // undefined
console.log(typeof student);     // object
console.log(typeof subjects);    // object


// =====================================================
// 5. TYPE CONVERSION
// =====================================================
// Definition:
// Type conversion means manually changing one data type
// into another data type.

// String to Number
let numberString = "100";

let convertedNumber = Number(numberString);

console.log("Converted Number:", convertedNumber);
console.log("Data Type:", typeof convertedNumber);


// Number to String
let numberValue = 500;

let convertedString = String(numberValue);

console.log("Converted String:", convertedString);
console.log("Data Type:", typeof convertedString);


// =====================================================
// 6. TYPE COERCION
// =====================================================
// Definition:
// Type coercion happens when JavaScript automatically
// converts one data type into another.

let firstNumber = 10;
let secondNumber = "20";

let total = firstNumber + secondNumber;

console.log("Type Coercion:", total);
// Output: 1020


// =====================================================
// 7. ARITHMETIC OPERATORS
// =====================================================
// Definition:
// Arithmetic operators are used for mathematical
// calculations.

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


// =====================================================
// 8. ASSIGNMENT OPERATORS
// =====================================================
// Definition:
// Assignment operators are used to assign or update
// a variable's value.

let score = 50;

console.log("Original Score:", score);

score += 10;
console.log("score += 10:", score);

score -= 5;
console.log("score -= 5:", score);

score *= 2;
console.log("score *= 2:", score);

score /= 2;
console.log("score /= 2:", score);


// =====================================================
// 9. COMPARISON OPERATORS
// =====================================================
// Definition:
// Comparison operators compare two values and return
// true or false.

let x = 10;
let y = 20;

console.log("x == y:", x == y);
console.log("x === y:", x === y);
console.log("x != y:", x != y);
console.log("x !== y:", x !== y);
console.log("x < y:", x < y);
console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x >= y:", x >= y);


// =====================================================
// 10. LOGICAL OPERATORS
// =====================================================
// Definition:
// Logical operators are used to combine conditions.

// let userAge = 25;
// let hasId = true;


// && AND
// Both conditions must be true.
console.log(
    "AND:",
    userAge >= 18 && hasId === true
);


// || OR
// At least one condition must be true.
console.log(
    "OR:",
    userAge >= 18 || hasId === false
);


// ! NOT
// Reverses true to false or false to true.
console.log(
    "NOT:",
    !hasId
);


// =====================================================
// 11. TEMPLATE LITERALS
// =====================================================
// Definition:
// Template literals are strings written using backticks.
// They allow variables to be inserted using ${}.

let userName = "Jay";
let userAge = 25;
let userCity = "Rajahmundry";

let message = `
My name is ${userName}.
I am ${userAge} years old.
I live in ${userCity}.
`;

console.log(message);
