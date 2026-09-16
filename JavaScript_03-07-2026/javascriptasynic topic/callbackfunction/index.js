
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function greet(name, callback) {

    result.innerHTML += "Hello " + name + "<br>";

    callback();
}

function welcome() {

    result.innerHTML += "Welcome to JavaScript!";

}

btn.addEventListener("click", function () {

    greet("Krishna", welcome);

});