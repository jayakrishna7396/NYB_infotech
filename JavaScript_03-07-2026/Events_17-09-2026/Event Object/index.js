// Event Object
// Definition:
// Event Object contains information about an event
// that happened on the webpage.


// Select button
let button = document.getElementById("btn");


// Click Event
button.addEventListener("click", function(event) {

    console.log("Event Object:", event);

    console.log("Event Type:", event.type);

    console.log("Clicked Element:", event.target);

});


// Select input
let input = document.getElementById("nameInput");


// Keyboard Event
input.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);

    console.log("Key Code:", event.code);

    console.log("Event Type:", event.type);

});