// Definition:
// map() is an array method.
// It changes each element and returns a new array.

// Syntax:
// array.map((element) => {
//     return newValue;
// });

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => {
    return num * 2;
});

console.log("Original Array:", numbers);
console.log("New Array:", result);