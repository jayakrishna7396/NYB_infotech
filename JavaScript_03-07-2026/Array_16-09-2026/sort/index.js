// sort()
// Definition: sort() arranges array elements in a specific order.

// Example 1: Sort strings
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log("Sorted Fruits:", fruits);

// Example 2: Sort numbers in ascending order
let numbers = [40, 10, 30, 20];

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Ascending Order:", numbers);

// Example 3: Sort numbers in descending order
let numbers2 = [40, 10, 30, 20];

numbers2.sort(function(a, b) {
    return b - a;
});

console.log("Descending Order:", numbers2);