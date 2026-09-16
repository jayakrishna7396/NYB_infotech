// findIndex()
// Definition: findIndex() returns the index of the first element that matches a condition.

// Example 1: Find index of a number

let numbers = [10, 20, 30, 40];

let result = numbers.findIndex(function(number) {
    return number > 20;
});

console.log("Result:", result);

// Example 2: Find first even number index

let numbers2 = [1, 3, 5, 8, 10];

let evenIndex = numbers2.findIndex(function(number) {
    return number % 2 === 0;
});

console.log("First Even Number Index:", evenIndex);

// Example 3: Find student index

let students = ["Rahul", "Arun", "Krishna", "Kiran"];

let studentIndex = students.findIndex(function(name) {
    return name === "Krishna";
});

console.log("Student Index:", studentIndex);

// Example 4: Value not found

let fruits = ["Apple", "Banana", "Mango"];

let fruitIndex = fruits.findIndex(function(name) {
    return name === "Orange";
});

console.log("Fruit Index:", fruitIndex);