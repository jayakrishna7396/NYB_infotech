// DOM Traversing
// Definition:
// DOM Traversing means moving from one HTML element
// to another element in the DOM.


// Select an element
let item2 = document.getElementById("item2");
// 1. Parent Element
// Finds the parent of item2
console.log("Parent:", item2.parentElement);


// 2. Children
// Finds all child elements of the list
let list = document.getElementById("list");
console.log("Children:", list.children);


// 3. First Child
// Finds the first child element
console.log("First Child:", list.firstElementChild);


// 4. Last Child
// Finds the last child element
console.log("Last Child:", list.lastElementChild);


// 5. Next Sibling
// Finds the element after item2
console.log("Next Sibling:", item2.nextElementSibling);


// 6. Previous Sibling
// Finds the element before item2
console.log("Previous Sibling:", item2.previousElementSibling);