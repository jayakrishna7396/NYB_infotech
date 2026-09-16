let parent = document.getElementById("parent");
let child = document.getElementById("child");

child.addEventListener("click", function () {
    console.log("Child clicked");
});

parent.addEventListener("click", function () {
    console.log("Parent clicked");
});