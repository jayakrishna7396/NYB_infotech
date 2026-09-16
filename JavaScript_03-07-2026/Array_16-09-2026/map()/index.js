
// map()
// Definition: map() goes through every element and creates a new array.


// Example 1: Multiply each number by 2
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(number) {
    return number * 2;
});

console.log("Original Array:", numbers);
console.log("New Array:", result);


// Example 2: Add 10 to each number
let marks = [50, 60, 70, 80];

let newMarks = marks.map(function(mark) {
    return mark + 10;
});

console.log("Original Marks:", marks);
console.log("New Marks:", newMarks);


// Example 3: Convert names to uppercase
let names = ["krishna", "rahul", "arun"];

let upperNames = names.map(function(name) {
    return name.toUpperCase();
});

console.log("Original Names:", names);
console.log("Uppercase Names:", upperNames);