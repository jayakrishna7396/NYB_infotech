let normalBtn = document.getElementById("normalBtn");
let nameInput = document.getElementById("nameInput");
let normalMessage = document.getElementById("normalMessage");

normalBtn.addEventListener("click", function () {
    normalMessage.textContent = "Button was clicked";
});

nameInput.addEventListener("input", function () {
    normalMessage.textContent = "You typed: " + nameInput.value;
});