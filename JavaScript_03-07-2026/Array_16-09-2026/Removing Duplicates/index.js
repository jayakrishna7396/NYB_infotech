// Removing Duplicates
// Definition: Removing duplicates means removing repeated values from an array.

// Example 1: Remove duplicate numbers
let numbers = [10, 20, 10, 30, 20, 40];

let uniqueNumbers = [...new Set(numbers)];

console.log("Unique Numbers:", uniqueNumbers);

// Example 2: Remove duplicate fruits
let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

let uniqueFruits = [...new Set(fruits)];

console.log("Unique Fruits:", uniqueFruits);

// Example 3: Remove duplicate names
let names = ["Krishna", "Rahul", "Krishna", "Arun", "Rahul"];

let uniqueNames = [...new Set(names)];

console.log("Unique Names:", uniqueNames);