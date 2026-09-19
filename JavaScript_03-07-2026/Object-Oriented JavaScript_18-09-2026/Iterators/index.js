// Iterators
// Definition:
// An iterator allows us to access collection elements
// one by one using the next() method.

// Create an array
const numbers = [10, 20, 30, 40];

// Create an iterator
const iterator = numbers[Symbol.iterator]();

// Get values one by one
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());