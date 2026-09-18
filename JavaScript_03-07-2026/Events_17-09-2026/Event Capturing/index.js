// Event Capturing
// Definition:
// Event Capturing means the event moves from the parent
// element to the child element.


// Select elements
let parent = document.getElementById("parent");
let child = document.getElementById("child");


// Parent Event
parent.addEventListener("click", function() {

    console.log("Parent clicked");

}, true);


// Child Event
child.addEventListener("click", function() {

    console.log("Button clicked");

}, true);