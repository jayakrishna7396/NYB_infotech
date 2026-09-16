// join()
// Definition: join() combines all array elements into one string.

// Example 1: Join with space
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.join(" ");

console.log("Result:", result);

// Example 2: Join with comma
let fruits2 = ["Apple", "Banana", "Mango"];

let result2 = fruits2.join(",");

console.log("Comma:", result2);

// Example 3: Join with hyphen
let numbers = [10, 20, 30, 40];

let result3 = numbers.join("-");

console.log("Hyphen:", result3);

// Example 4: Join with empty string
let letters = ["H", "e", "l", "l", "o"];

let result4 = letters.join("");

console.log("Word:", result4);

// Example 5: No separator
let colors = ["Red", "Green", "Blue"];

let result5 = colors.join();

console.log("Default:", result5);