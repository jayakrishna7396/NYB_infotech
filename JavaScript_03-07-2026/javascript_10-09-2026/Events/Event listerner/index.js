let button = document.getElementById("clickBtn");
let message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked!";
});


//syntax
element.addEventListener("event", function () {
    // code
});