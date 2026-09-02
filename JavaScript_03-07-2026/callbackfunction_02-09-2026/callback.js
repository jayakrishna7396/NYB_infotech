// Callback Function

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function welcome() {
    console.log("Welcome to JavaScript");
}

greet("Jayakrish", welcome);