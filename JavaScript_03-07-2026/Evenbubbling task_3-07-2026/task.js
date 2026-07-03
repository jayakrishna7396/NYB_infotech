//evenbubbling
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent clicked");
});

child.addEventListener("click", function () {
    console.log("Button clicked");
});


//even caputuring
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", function () {
    console.log("Button clicked");
}, true);



//delegation
let list = document.getElementById("list");

list.addEventListener("click", function (event) {
    console.log("You clicked:", event.target.innerText);
});
