
// Mini Project
// Concepts:
// 1. DOM Manipulation
// 2. Event Handling
// 3. Event Delegation
// 4. Timer Functions
// 5. Callback Functions
// 6. Promises



// DOM Elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// Callback Function

function showMessage() {
    console.log("Task Added Successfully");
}



// Promise
// Simulates saving task
function saveTask(task) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (task !== "") {
                resolve("Task Saved");
            } else {
                reject("Task Cannot Be Empty");
            }

        }, 1000);

    });

}



// DOM Manipulation
function addTask(task, callback) {

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    callback();

}



// Event Handling
addBtn.addEventListener("click", () => {

    let task = input.value.trim();

    saveTask(task)

        .then((message) => {

            console.log(message);

            addTask(task, showMessage);

            input.value = "";

        })

        .catch((error) => {

            alert(error);

        });

});



// Event Delegation
taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();

        console.log("Task Deleted");

    }

});



// Timer Function
setTimeout(() => {

    console.log("Welcome to Task Manager!");

}, 2000);