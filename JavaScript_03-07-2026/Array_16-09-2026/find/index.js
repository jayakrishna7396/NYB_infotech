
// find()
// Definition: find() returns the first element that matches a condition.
// Example 1: Find number greater than 20
let numbers = [10, 20, 30, 40];

let result = numbers.find(function(number) {
    return number > 20;
});

console.log("Result:", result);


// Example 2: Find first even number
let numbers2 = [1, 3, 5, 8, 10];

let evenNumber = numbers2.find(function(number) {
    return number % 2 === 0;
});

console.log("First Even Number:", evenNumber);


// Example 3: Find a student
let students = ["Rahul", "Arun", "Krishna", "Kiran"];

let student = students.find(function(name) {
    return name === "Krishna";
});

console.log("Student:", student);


// Example 4: Value not found
let fruits = ["Apple", "Banana", "Mango"];

let fruit = fruits.find(function(name) {
    return name === "Orange";
});

console.log("Fruit:", fruit);