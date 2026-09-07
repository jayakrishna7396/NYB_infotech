// -----------------------------------
// 1. DOM SELECTION
// -----------------------------------

const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

const form = document.getElementById("productForm");
const input = document.getElementById("productInput");

const list = document.getElementById("productList");
const message = document.getElementById("message");


// -----------------------------------
// 2. EVENT LISTENER
// -----------------------------------

changeBtn.addEventListener("click", function () {

    // 3. DOM MANIPULATION
    title.textContent = "My Products";
    title.style.color = "blue";

});


// -----------------------------------
// 4. FORM HANDLING
// -----------------------------------

form.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();

    const productName = input.value.trim();

    if (productName === "") {

        message.textContent = "Please enter a product";

        return;
    }


    // -----------------------------------
    // 5. CREATING ELEMENT DYNAMICALLY
    // -----------------------------------

    const li = document.createElement("li");

    li.textContent = productName;

    list.appendChild(li);


    // Clear input
    input.value = "";

    message.textContent = "Product added successfully";

});


// -----------------------------------
// 6. EVENT DELEGATION
// -----------------------------------

list.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        event.target.remove();

    }

});




//Dom selector
document.getElementById("title")
document.getElementsByClassName("title")
document.getElementsByTagName("h1")



// DOM Manipulation
// Change text
element.textContent = "Hello";
// Change HTML
element.innerHTML = "<b>Hello</b>";
// Change style
element.style.color = "red";
// Change attribute
element.setAttribute("class", "box");



// Creating Elements Dynamically
// Create element
document.createElement("div");
// Add at the end
parent.appendChild(element);
// Add before another element
parent.insertBefore(element, referenceElement);
// Remove element
element.remove();
//example
button.addEventListener("click", function () {
    alert("Clicked");
});


// Event Listeners
element.addEventListener("event", function () {
    
});



// Event Delegation
parent.addEventListener("event", function (event) {
    if (event.target.matches("child")) {
        
    }
});


// Form Handling
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = input.value;
});