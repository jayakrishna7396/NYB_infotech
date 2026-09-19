//Call Stack // Definition: 
// // Call Stack is a place where JavaScript 
// // keeps track of the functions that are running. 
// // It follows LIFO (Last In, First Out).

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();
