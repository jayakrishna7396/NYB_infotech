// Event Bubbling
// Definition:
// Event Bubbling means an event starts from the child element
// and moves upward to its parent elements.


// Select parent and child
let parent = document.getElementById("parent");
let child = document.getElementById("child");


// Child event
child.addEventListener("click", function() {

    console.log("Button clicked");

});


// Parent event
parent.addEventListener("click", function() {

    console.log("Parent clicked");

});