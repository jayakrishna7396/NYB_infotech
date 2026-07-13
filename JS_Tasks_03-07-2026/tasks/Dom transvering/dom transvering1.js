//remove the element for the doom
function removeText(){

document.getElementById("msg").remove();

}

//replacement an element
let newHeading = document.createElement("h1");

newHeading.textContent = "New Heading";

let old = document.getElementById("oldHeading");

old.replaceWith(newHeading);


//button click event

document.getElementById("btn")
.addEventListener("click", function(){

alert("Button Clicked");

});

//input elements
let input = document.getElementById("name");
input.addEventListener("input", function(){

document.getElementById("output").textContent =
this.value;

});


//mouse event
let box = document.getElementById("box");

box.addEventListener("mouseover", function(){

box.style.background = "yellow";

});

box.addEventListener("mouseout", function(){

box.style.background = "white";

});