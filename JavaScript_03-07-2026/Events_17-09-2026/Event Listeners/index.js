// Event Listeners
// Definition:
// An event listener waits for a user action
// and runs a function when that action happens.


// Select button
let button = document.getElementById("btn");


// Add click event listener
button.addEventListener("click", function () {

    console.log("Button was clicked");

});


// Select input
let input = document.getElementById("nameInput");


// Add input event listener
input.addEventListener("input", function () {

    console.log("You typed:", input.value);

});