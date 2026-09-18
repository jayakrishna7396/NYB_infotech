// Creating Elements Dynamically
// Definition:
// Creating elements dynamically means creating new HTML elements
// using JavaScript while the webpage is running.


// 1. Select the container
let container = document.getElementById("container");


// 2. Create a new paragraph
let paragraph = document.createElement("p");


// 3. Add text to the paragraph
paragraph.textContent = "This paragraph was created using JavaScript";


// 4. Add the paragraph to the webpage
container.appendChild(paragraph);


// 5. Create a new heading
let heading = document.createElement("h2");
heading.textContent = "Welcome to DOM";
container.appendChild(heading);


// 6. Create a new button
let button = document.createElement("button");
button.textContent = "Click Me";
container.appendChild(button);


// 7. See the created elements in console
console.log("Paragraph:", paragraph);
console.log("Heading:", heading);
console.log("Button:", button);