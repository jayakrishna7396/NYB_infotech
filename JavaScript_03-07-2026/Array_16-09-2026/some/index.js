// some()
// Definition: some() checks if at least one element matches a condition.

// Example 1: Check if any number is greater than 30
let numbers = [10, 20, 30, 40];

let result = numbers.some(function(number) {
    return number > 30;
});

console.log("Result:", result);

// Example 2: Check if any number is even
let numbers2 = [1, 3, 5, 8, 9];

let evenNumber = numbers2.some(function(number) {
    return number % 2 === 0;
});

console.log("Any Even Number:", evenNumber);

// Example 3: Check if any student is Krishna
let students = ["Rahul", "Arun", "Krishna", "Kiran"];

let student = students.some(function(name) {
    return name === "Krishna";
});

console.log("Krishna Exists:", student);

// Example 4: No matching value
let fruits = ["Apple", "Banana", "Mango"];

let fruit = fruits.some(function(name) {
    return name === "Orange";
});

console.log("Orange Exists:", fruit);