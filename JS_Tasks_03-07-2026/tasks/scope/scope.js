//global scope
// A variable declared outside any function or block has Global Scope. It can be accessed from anywhere in the program.
//example 1
let company = "OpenAI";

function showCompany() {
    console.log(company);
}

console.log(company);
showCompany();

//example 2
var city = "Hyderabad";

function displayCity() {
    console.log("Inside Function:", city);
}

displayCity();
console.log("Outside Function:", city);


//function scope
//Variables declared using var, let, or const inside a function can only be accessed within that function.
//example 1
function student() {
    let name = "Krishna";
    console.log(name);
}

student();


//example 2
function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

add();


//block scope
// Variables declared using let and const are accessible only inside the block ({}).
{
    let age = 25;
    const country = "India";

    console.log(age);
    console.log(country);
}


//scope accesibility
let language = "JavaScript";

function learning() {
    console.log(language);
}

learning();


function employee() {
    let salary = 50000;

    function bonus() {
        console.log(salary);
    }

    bonus();
}

employee();



//recursive function
//sum of natural number
function sum(n) {
    if (n === 1)
        return 1;

    return n + sum(n - 1);
}

console.log(sum(5));

//reverse string
function reverse(str) {
    if (str === "")
        return "";

    return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("Hello"));

//count down
function countdown(n) {
    if (n === 0) {
        console.log("Finished");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);

//sum using recursion
function sum(n) {
    if (n === 1)
        return 1;

    return n + sum(n - 1);
}

console.log(sum(10));

//sum of using loop
function sum(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

console.log(sum(10));
