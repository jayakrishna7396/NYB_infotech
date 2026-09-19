// Generators
// Definition:
// A Generator is a special function that can pause
// and resume its execution.

// Generator Function
function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}

// Create generator object
const generator = numbers();

// Get values one by one
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());