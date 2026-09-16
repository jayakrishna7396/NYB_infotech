// Select DOM elements
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let message = document.getElementById("message");

// Get tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button data-index="${index}">Delete</button>
        `;

        taskList.appendChild(li);
    });
}


// Add Task - Event
addBtn.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task === "") {
        message.textContent = "Please enter a task";
        return;
    }

    // Add task
    tasks.push(task);

    // Save task in browser storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear input
    taskInput.value = "";

    message.textContent = "Task added successfully";

    // Update DOM
    displayTasks();
});


// Event Delegation
taskList.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        let index = event.target.dataset.index;

        // Remove task
        tasks.splice(index, 1);

        // Update Local Storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Update DOM
        displayTasks();

        message.textContent = "Task deleted";
    }
});


// Display saved tasks when page loads
displayTasks();