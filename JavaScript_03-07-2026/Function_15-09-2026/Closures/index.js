
// Closures
// A closure allows an inner function
// to remember variables from its outer function.

function outerFunction() {

    let count = 0;

    function innerFunction() {

        count++;

        console.log("Count:", count);
    }

    return innerFunction;
}


// Create closure
const counter = outerFunction();


// Call the inner function
counter();
counter();
counter();