
// Lexical Scope--/ A function can access variables
// from its outer scope where it was created.

let name = "Krishna";

function outerFunction() {

    let message = "Hello";

    function innerFunction() {

        console.log(message);
        console.log(name);

    }

    innerFunction();
}

outerFunction();