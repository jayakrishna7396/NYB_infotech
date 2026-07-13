//event bubbling
document.getElementById("parent")
.addEventListener("click", function () {

    console.log("Parent Clicked");

});

document.getElementById("child")
.addEventListener("click", function () {

    console.log("Button Clicked");

});

//stopping event bubbling
document.getElementById("child")
.addEventListener("click", function (event) {

    console.log("Button Clicked");

    event.stopPropagation();

});

//event capturing
document.getElementById("parent")
.addEventListener("click", function () {

    console.log("Parent");

}, true);

document.getElementById("child")
.addEventListener("click", function () {

    console.log("Button");

}, true);


//event delgartion
document.getElementById("list")
.addEventListener("click", function (event) {

    console.log(event.target.textContent);

});



// Dynamic List Using Event Delegation
const input = document.getElementById("task");
const button = document.getElementById("add");
const list = document.getElementById("tasks");

button.addEventListener("click", function () {

    const li = document.createElement("li");

    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";

});

list.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        event.target.style.color = "red";

    }

});


// Dynamic Menu Using Event Delegation
document.getElementById("menu")
.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        alert("You selected: " + event.target.textContent);

    }

});