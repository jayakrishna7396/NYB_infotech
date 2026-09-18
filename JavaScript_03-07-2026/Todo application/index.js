// Todo Application
// Features:
// Add Todo
// Edit Todo
// Delete Todo
// Mark as Completed
// Filter Todos
// Local Storage Persistence
// Dynamic DOM Rendering


let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

let allBtn = document.getElementById("allBtn");
let activeBtn = document.getElementById("activeBtn");
let completedBtn = document.getElementById("completedBtn");


// Get todos from Local Storage

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";


// Add Todo

addBtn.addEventListener("click", function () {

    let todoText = todoInput.value.trim();

    if (todoText === "") {
        console.log("Please enter a todo");
        return;
    }

    let todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };

    todos.push(todo);

    saveTodos();

    todoInput.value = "";

    renderTodos();
});


// Save Todos to Local Storage

function saveTodos() {

    localStorage.setItem("todos", JSON.stringify(todos));

}


// Render Todos Dynamically

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos = todos.filter(function (todo) {
            return todo.completed === false;
        });

    }

    if (currentFilter === "completed") {

        filteredTodos = todos.filter(function (todo) {
            return todo.completed === true;
        });

    }


    filteredTodos.forEach(function (todo) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = todo.text;

        if (todo.completed) {
            span.style.textDecoration = "line-through";
        }


        // Complete Button

        let completeBtn = document.createElement("button");

        completeBtn.textContent = todo.completed
            ? "Undo"
            : "Complete";


        completeBtn.addEventListener("click", function () {

            todo.completed = !todo.completed;

            saveTodos();

            renderTodos();

        });


        // Edit Button

        let editBtn = document.createElement("button");

        editBtn.textContent = "Edit";


        editBtn.addEventListener("click", function () {

            let newText = prompt("Edit Todo", todo.text);

            if (newText !== null && newText.trim() !== "") {

                todo.text = newText.trim();

                saveTodos();

                renderTodos();

            }

        });


        // Delete Button

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";


        deleteBtn.addEventListener("click", function () {

            todos = todos.filter(function (item) {

                return item.id !== todo.id;

            });

            saveTodos();

            renderTodos();

        });


        li.appendChild(span);

        li.appendChild(completeBtn);

        li.appendChild(editBtn);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

}


// All Todos

allBtn.addEventListener("click", function () {

    currentFilter = "all";

    renderTodos();

});


// Active Todos

activeBtn.addEventListener("click", function () {

    currentFilter = "active";

    renderTodos();

});


// Completed Todos

completedBtn.addEventListener("click", function () {

    currentFilter = "completed";

    renderTodos();

});


// Initial Render

renderTodos();