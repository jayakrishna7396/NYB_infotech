
// forEach()
// Definition: forEach() runs a function once for each element in an array.


// Example 1: Print each fruit
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log("Fruit:", fruit);
});


// Example 2: Print each number
let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log("Number:", number);
});


// Example 3: Add 5 to each number
let marks = [50, 60, 70, 80];

marks.forEach(function(mark) {
    console.log("New Mark:", mark + 5);
});


// Example 4: Using index
let students = ["Krishna", "Rahul", "Arun"];

students.forEach(function(student, index) {
    console.log(index, student);
});
