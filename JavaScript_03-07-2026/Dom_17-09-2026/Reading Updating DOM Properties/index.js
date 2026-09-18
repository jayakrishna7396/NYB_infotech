// Reading and Updating DOM Properties
// Definition:
// Reading means getting information from an HTML element.
// Updating means changing an HTML element using JavaScript.


// 1. Reading text
let title = document.getElementById("title");
console.log("Title:", title.textContent);


// 2. Updating text
title.textContent = "Hello JavaScript";
console.log("Updated Title:", title.textContent);


// 3. Reading input value
let nameInput = document.getElementById("nameInput");
console.log("Input Value:", nameInput.value);


// 4. Updating input value
nameInput.value = "Jayakrishna";
console.log("Updated Input Value:", nameInput.value);


// 5. Reading HTML
let message = document.getElementById("message");
console.log("Message:", message.innerHTML);


// 6. Updating HTML
message.innerHTML = "<b>Welcome to DOM</b>";
console.log("Updated Message:", message.innerHTML);


// 7. Reading button text
let button = document.getElementById("btn");
console.log("Button Text:", button.textContent);


// 8. Updating button text
button.textContent = "Updated Button";
console.log("Updated Button:", button.textContent);