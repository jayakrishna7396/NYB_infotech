// Truthy and Falsy Values

// Definition:
// Truthy = value treated as true
// Falsy  = value treated as false

let value = "Hello";

if (value) {
    console.log(value + " is Truthy");
} else {
    console.log(value + " is Falsy");
}

// Falsy example
let number = 0;

if (number) {
    console.log(number + " is Truthy");
} else {
    console.log(number + " is Falsy");
}