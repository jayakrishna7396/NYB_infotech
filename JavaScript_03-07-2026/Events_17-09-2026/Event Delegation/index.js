// Event Delegation
// Definition:
// Event Delegation means adding one event listener
// to a parent element to handle events from its children.


// Select the parent

let fruitList = document.getElementById("fruitList");


// Add one event listener to the parent

fruitList.addEventListener("click", function(event) {

    console.log("Clicked Fruit:", event.target.textContent);

});