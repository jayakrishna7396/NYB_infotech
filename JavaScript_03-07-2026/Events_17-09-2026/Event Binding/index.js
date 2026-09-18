// Event Binding
// Definition:
// Event Binding means connecting an event to an HTML element
// so that a function runs when the event happens.


// Select elements
let button = document.getElementById("btn");
let message = document.getElementById("message");


// Bind click event to button
button.addEventListener("click", function () {

    console.log("Button clicked");

    message.textContent = "Button was clicked!";

});