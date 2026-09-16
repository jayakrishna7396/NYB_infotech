
// 1. Global Scope
// Definition:
// A variable declared outside a function or block
// can be accessed from different parts of the program.

let globalName = "Krishna";

function showGlobal() {
    console.log("Global:", globalName);
}

showGlobal();



// 2. Function Scope
// Definition:
// A variable declared inside a function
// can be accessed only inside that function.

function showFunction() {

    let message = "Hello from Function";

    console.log("Function:", message);
}

showFunction();


// 3. Block Scope
// Definition:
// A variable declared using let or const inside { }
// can be accessed only inside that block.

if (true) {

    let age = 22;
    const city = "Rajahmundry";

    console.log("Block Age:", age);
    console.log("Block City:", city);
}