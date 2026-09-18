// DOM Practice
// This program covers:
// 1. Create and modify HTML elements dynamically
// 2. Dynamic list
// 3. Click event
// 4. Input event
// 5. Change event
// 6. Submit event
// 7. Mouse event
// 8. Keyboard event
// 9. Event bubbling
// 10. Event capturing
// 11. Event delegation
// 12. Throttling
// 13. Debouncing
// 14. Local Storage
// 15. Session Storage
// 16. Data persistence


// 1. CREATE AND MODIFY ELEMENTS DYNAMICALLY

let title = document.getElementById("title");

title.textContent = "JavaScript DOM Practice";

console.log("Updated Title:", title.textContent);


// Create new paragraph

let paragraph = document.createElement("p");

paragraph.textContent = "This paragraph was created using JavaScript.";

document.body.appendChild(paragraph);

console.log("Created Element:", paragraph);


// 2. DYNAMIC LIST

let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {

    let itemText = itemInput.value;

    if (itemText === "") {
        console.log("Please enter an item");
        return;
    }

    let li = document.createElement("li");

    li.textContent = itemText;

    itemList.appendChild(li);

    itemInput.value = "";

    console.log("Item Added:", itemText);
});


// 3. INPUT EVENT

let nameInput = document.getElementById("nameInput");
let nameMessage = document.getElementById("nameMessage");

nameInput.addEventListener("input", function () {

    nameMessage.textContent = "Hello " + nameInput.value;

    console.log("Input:", nameInput.value);
});


// 4. CHANGE EVENT

let course = document.getElementById("course");

course.addEventListener("change", function () {

    console.log("Selected Course:", course.value);
});


// 5. SUBMIT EVENT

let userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let username = document.getElementById("username").value;

    console.log("Form Submitted");
    console.log("Username:", username);
});


// 6. MOUSE EVENT

let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {

    console.log("Mouse Entered");
});

mouseBox.addEventListener("mouseout", function () {

    console.log("Mouse Left");
});


// 7. KEYBOARD EVENT

let keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keydown", function (event) {

    console.log("Key Pressed:", event.key);
});


// 8. EVENT BUBBLING

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {

    console.log("Parent Clicked");
});

child.addEventListener("click", function () {

    console.log("Child Clicked");
});


// Click Child
// Output:
// Child Clicked
// Parent Clicked


// 9. EVENT CAPTURING

parent.addEventListener("click", function () {

    console.log("Parent Capturing");

}, true);

child.addEventListener("click", function () {

    console.log("Child Capturing");

}, true);


// 10. EVENT DELEGATION

itemList.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        console.log("Clicked Item:", event.target.textContent);

    }
});


// 11. THROTTLING

let throttleBox = document.getElementById("throttleBox");

function throttle(callback, delay) {

    let canRun = true;

    return function () {

        if (!canRun) {
            return;
        }

        callback();

        canRun = false;

        setTimeout(function () {

            canRun = true;

        }, delay);
    };
}

function showMouseMessage() {

    console.log("Throttle: Mouse moved");
}

let throttledFunction = throttle(showMouseMessage, 1000);

throttleBox.addEventListener("mousemove", throttledFunction);


// 12. DEBOUNCING

let searchInput = document.getElementById("searchInput");

function debounce(callback, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(function () {

            callback();

        }, delay);
    };
}

function search() {

    console.log("Searching:", searchInput.value);
}

let debouncedSearch = debounce(search, 1000);

searchInput.addEventListener("input", debouncedSearch);


// 13. LOCAL STORAGE

let saveBtn = document.getElementById("saveBtn");
let getBtn = document.getElementById("getBtn");

saveBtn.addEventListener("click", function () {

    let student = {
        name: "Krishna",
        age: 22,
        course: "JavaScript"
    };

    // Object → JSON String
    localStorage.setItem("student", JSON.stringify(student));

    console.log("Student Saved:", student);
});


getBtn.addEventListener("click", function () {

    // Get JSON String
    let data = localStorage.getItem("student");

    if (data) {

        // JSON String → Object
        let student = JSON.parse(data);

        console.log("Student Retrieved:", student);
        console.log("Name:", student.name);
        console.log("Age:", student.age);
        console.log("Course:", student.course);

    } else {

        console.log("No student data found");

    }
});


// 14. SESSION STORAGE

let sessionBtn = document.getElementById("sessionBtn");

sessionBtn.addEventListener("click", function () {

    let user = {
        name: "Krishna",
        login: true
    };

    sessionStorage.setItem("user", JSON.stringify(user));

    console.log("Session Data Saved:", user);

    let data = sessionStorage.getItem("user");

    let result = JSON.parse(data);

    console.log("Session Data Retrieved:", result);
});