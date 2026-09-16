// flat()
// Definition: flat() removes nested arrays and creates a single-level array.

// Example 1: Simple flat()
let numbers = [1, 2, [3, 4], 5];

let result = numbers.flat();

console.log("Result:", result);

// Example 2: Multiple nested arrays
let numbers2 = [1, [2, 3], [4, 5]];

let result2 = numbers2.flat();

console.log("Result 2:", result2);

// Example 3: Nested array with two levels
let numbers3 = [1, [2, [3, 4]]];

let result3 = numbers3.flat();

console.log("Default Flat:", result3);

// Example 4: flat(2)
let numbers4 = [1, [2, [3, 4]]];

let result4 = numbers4.flat(2);

console.log("Flat 2:", result4);

// Example 5: Deep nested array
let numbers5 = [1, [2, [3, [4, 5]]]];

let result5 = numbers5.flat(Infinity);

console.log("Flat Infinity:", result5);