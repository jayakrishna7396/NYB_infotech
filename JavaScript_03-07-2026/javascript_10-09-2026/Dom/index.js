
// 1. INTRODUCTION TO DOM
// Definition:
// DOM (Document Object Model) represents an HTML
// document as objects so JavaScript can change it.
//
// Syntax:
// document
//
// Example:
console.log(document);



// 2. SELECTING DOM ELEMENTS
// Definition:
// Selecting DOM elements means finding HTML elements
// using JavaScript.

// Syntax:
// document.getElementById("id");
// document.querySelector("selector");

// Example:
let title = document.getElementById("title");
let message = document.querySelector("#message");
let list = document.querySelector("#list");



// 3. READING AND MODIFYING DOM PROPERTIES
// Definition:
// Reading means getting information from an element.
// Modifying means changing its content or properties.

// Syntax:
// element.textContent;
// element.textContent = "new value";

// Example:
console.log(title.textContent);

title.textContent = "DOM Concepts";


// 4. DOM TRAVERSING
// Definition:
// DOM Traversing means moving from one element
// to another element such as parent, child, or sibling.

// Syntax:
// element.parentElement;
// element.children;
// element.nextElementSibling;
// element.previousElementSibling;

// Example:
let container = title.parentElement;

console.log("Parent:", container);
console.log("Children:", container.children);


// 5. CREATING ELEMENTS DYNAMICALLY
// Definition:
// Creating elements dynamically means creating
// new HTML elements using JavaScript.

// Syntax:
// document.createElement("element");

// Example:
let newItem = document.createElement("li");

newItem.textContent = "New Item";


// 6. ADDING ELEMENTS
// Definition:
// Adding means inserting a newly created element
// into the webpage.

// Syntax:
// parent.appendChild(child);

// Example:
list.appendChild(newItem);



// 7. REMOVING ELEMENTS
// Definition:
// Removing means deleting an HTML element
// from the webpage.

// Syntax:
// element.remove();

// Example:
// newItem.remove();



// BUTTON EVENTS
let changeBtn = document.getElementById("changeBtn");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");


// Modify DOM
changeBtn.addEventListener("click", function () {

    message.textContent = "Text changed using DOM!";
});


// Create and Add Element
addBtn.addEventListener("click", function () {

    let item = document.createElement("li");

    item.textContent = "New Dynamic Item";

    list.appendChild(item);
});


// Remove Element
removeBtn.addEventListener("click", function () {

    let lastItem = list.lastElementChild;

    if (lastItem) {
        lastItem.remove();
    }
});