//Dom
// DOM Traversing means moving between related HTML elements such as parent, child, and sibling nodes.

//parent element
let child = document.getElementById("child");
console.log(child.parentElement);

//child element
let box = document.getElementById("box");
console.log(box.children);
console.log(box.firstElementChild);
console.log(box.lastElementChild);

//sibling
let second = document.getElementById("two");
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);


//DOM Elements Dynamically
let button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

