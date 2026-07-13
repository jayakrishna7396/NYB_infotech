//Mini Project – Student Management System

// This project combines:

// HTML
// CSS
// JavaScript
// DOM manipulation
// Events
// Local Storage
// Fetch API
// Promises
// Error Handling
// Features
// Add Student
// Delete Student
// Search Student
// Store data in Local Storage
// Load data using Fetch API (or mock API)
// Use Promises with .then() and .catch()
// Validate input using try...catch
// Dynamic DOM updates
// Event delegation for delete buttons

const students = [];

document.getElementById("addBtn").addEventListener("click", () => {

    const name = document.getElementById("name").value;

    if (!name) return;

    students.push(name);

    displayStudents();

});

function displayStudents() {

    let list = document.getElementById("students");

    list.innerHTML = "";

    students.forEach((student, index) => {

        list.innerHTML += `
            <li>
                ${student}
                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </li>
        `;

    });

}

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();

}