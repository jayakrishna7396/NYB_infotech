let captureParent = document.getElementById("captureParent");
let captureChild = document.getElementById("captureChild");

captureParent.addEventListener("click", function () {
    console.log("Parent clicked");
}, true);

captureChild.addEventListener("click", function () {
    console.log("Child clicked");
});