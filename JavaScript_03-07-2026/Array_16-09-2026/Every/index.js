// every()
// Definition: every() checks if all elements match a condition.

// Example 1: Check if all numbers are greater than 5
let numbers = [10, 20, 30, 40];

let result = numbers.every(function(number) {
    return number > 5;
});

console.log("Result:", result);

// Example 2: Check if all numbers are even
let numbers2 = [2, 4, 6, 8, 10];

let allEven = numbers2.every(function(number) {
    return number % 2 === 0;
});

console.log("All Numbers Even:", allEven);

// Example 3: Check if all students passed
let marks = [75, 80, 65, 90];

let allPassed = marks.every(function(mark) {
    return mark >= 35;
});

console.log("All Students Passed:", allPassed);

// Example 4: One value does not match
let numbers3 = [10, 20, 30, 4];

let check = numbers3.every(function(number) {
    return number > 5;
});

console.log("All Greater Than 5:", check);