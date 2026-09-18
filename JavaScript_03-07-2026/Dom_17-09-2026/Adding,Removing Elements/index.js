// Adding and Removing Elements
// Definition:
// Adding means inserting a new HTML element into the webpage.
// Removing means deleting an HTML element from the webpage.


// 1. Select the list
let list = document.getElementById("list");


// 2. Create a new element
let newItem = document.createElement("li");


// 3. Add text
newItem.textContent = "Mango";


// 4. Add the element to the list
list.appendChild(newItem);
console.log("After Adding:", list);


// 5. Remove the last element
list.removeChild(newItem);
console.log("After Removing:", list);