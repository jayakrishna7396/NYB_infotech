// What is a Promise?
// A Promise is a JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation.

let promise = new Promise((resolve, reject) => {
    // asynchronous task

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

//promises success
let myPromise = new Promise((resolve, reject) => {
    let paymentDone = true;

    if (paymentDone) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});

myPromise.then(result => {
    console.log(result);
});


//promises failure
let myPromise = new Promise((resolve, reject) => {
    let paymentDone = false;

    if (paymentDone) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});

myPromise.catch(error => {
    console.log(error);
});


//using settimeout
let promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data Loaded");
    }, 3000);

});

promise.then(data => console.log(data));


// Handle Promise Responses using .then() and .catch()
// Example 1
function loginUser() {

    return new Promise((resolve, reject) => {

        let login = true;

        if (login) {
            resolve("Welcome User");
        } else {
            reject("Invalid Login");
        }

    });

}

loginUser()
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});


// javaScript Basics
// Variables (var, let, const)
// Data Types
// Operators
// Input & Output
// Conditional Statements
// Loops
let age = 20;

if (age >= 18) {
    console.log("Adult");
}

// Normal Function
// Arrow Function
// Default Parameters
// Return Statement
// Scope
function add(a, b) {
    return a + b;
}

console.log(add(5,6));


//dom
document.getElementById("demo").innerHTML = "Hello";


//events
button.addEventListener("click", function(){

    alert("Clicked");

});

//event bubbling
parent.addEventListener("click",()=>{
    console.log("Parent");
});

child.addEventListener("click",()=>{
    console.log("Child");
});

//event capturing
parent.addEventListener("click",()=>{
    console.log("Parent");
},true);

//event delcartion
document.getElementById("list").addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        console.log(e.target.innerText);
    }

});

//throttling

function throttle(fn, delay){

    let flag=true;

    return function(){

        if(flag){

            fn();

            flag=false;

            setTimeout(()=>{
                flag=true;
            },delay);

        }

    }

}

//debouncing
function debounce(fn, delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer=setTimeout(fn,delay);

    }

}