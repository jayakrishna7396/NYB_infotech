// Error Handling
// Definition:
// Error Handling is used to handle errors
// so that the program does not stop unexpectedly.

try {

    console.log("Start");

    let result = unknownVariable;

    console.log(result);

} catch (error) {

    console.log("Error:", error.message);

}

console.log("Program continues");