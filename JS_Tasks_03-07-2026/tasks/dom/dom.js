// The Document Object Model (DOM) is a programming interface for HTML documents. It represents an HTML page as a tree of objects, allowing JavaScript to access and modify HTML elements, attributes, styles, and content
//get elibity by id
function changeText() {
    document.getElementById("title").textContent = "Hello JavaScript";
}

//getelemnt by class name
function changeColor() {

    let elements = document.getElementsByClassName("demo");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
}

//getelementbyquary selector
function changeHeading() {

    document.querySelector(".heading").textContent = "DOM Updated";
}

//quartselectorall
function changeList() {

    let items = document.querySelectorAll("li");

    items.forEach(item => {
        item.style.color = "green";
    });
}
