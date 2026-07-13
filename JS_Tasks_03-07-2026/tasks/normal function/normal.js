//
//click event
// The click event occurs when the user clicks an element.
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked");
});

// Change Event
// the change event occurs when the value of an input, select, or textarea changes and loses focus.
document.getElementById("course").addEventListener("change", function () {
    document.getElementById("output").textContent =
        "Selected: " + this.value;
});


//submit event
// The submit event occurs when a form is submitted.
document.getElementById("loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Form Submitted");

});

//call back function
// A callback is a function passed as an argument to another function and executed later.
function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Krishna");
}

process(greet);


//settimeout time
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);