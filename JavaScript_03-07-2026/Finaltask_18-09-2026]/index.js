// The application should include:
// 1.DOM Manipulation
// 2.Event Handling
// 3.Functions
// 4.Arrays and Objects
// 5.Search and Filter
// 6.Dynamic Data Rendering
// 7.Local Storage
// 8.API Integration
// 9.GET and at least one modification API operation
// 10.Promises / Async-Await
// 11.Loading State
// 12.Empty State
// 13.Error Handling
// 14.ES6+ Features
// 15.Reusable Functions


// =====================================================
// JAVASCRIPT API APPLICATION
// =====================================================

// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";


// =====================================================
// DOM ELEMENTS
// =====================================================

const searchInput = document.getElementById("searchInput");
const filterInput = document.getElementById("filterInput");
const loadBtn = document.getElementById("loadBtn");
const addBtn = document.getElementById("addBtn");

const userList = document.getElementById("userList");
const message = document.getElementById("message");
const loading = document.getElementById("loading");


// =====================================================
// ARRAY
// =====================================================

let users = [];


// =====================================================
// LOCAL STORAGE
// =====================================================

// Save users
function saveUsers() {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}


// Get users from Local Storage
function getStoredUsers() {

    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {

        users = JSON.parse(storedUsers);

    }

}


// =====================================================
// LOADING STATE
// =====================================================

function showLoading() {

    loading.style.display = "block";

}

function hideLoading() {

    loading.style.display = "none";

}


// =====================================================
// MESSAGE
// =====================================================

function showMessage(text) {

    message.textContent = text;

}


// =====================================================
// FETCH USERS - GET API
// =====================================================

async function fetchUsers() {

    try {

        showLoading();

        showMessage("");

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        const data = await response.json();

        users = data;

        // Save API data
        saveUsers();

        // Render users
        renderUsers(users);

    } catch (error) {

        console.log(error);

        showMessage(
            "Error: Unable to load users."
        );

        userList.innerHTML = "";

    } finally {

        hideLoading();

    }

}


// =====================================================
// RENDER USERS
// =====================================================

function renderUsers(userArray) {

    userList.innerHTML = "";

    // Empty state
    if (userArray.length === 0) {

        userList.innerHTML =
            "<p>No users found.</p>";

        return;

    }


    // Dynamic rendering
    userArray.forEach(function (user) {

        const userCard = document.createElement("div");

        userCard.innerHTML = `
            <h3>${user.name}</h3>

            <p>Email: ${user.email}</p>

            <p>City: ${user.address?.city ?? "Unknown"}</p>

            <button onclick="deleteUser(${user.id})">
                Delete
            </button>

            <hr>
        `;

        userList.appendChild(userCard);

    });

}


// =====================================================
// SEARCH
// =====================================================

function searchUsers() {

    const searchValue =
        searchInput.value.toLowerCase();

    const filteredUsers = users.filter(function (user) {

        return user.name
            .toLowerCase()
            .includes(searchValue);

    });

    renderUsers(filteredUsers);

}


// =====================================================
// FILTER
// =====================================================

function filterUsers() {

    const filterValue =
        filterInput.value.toLowerCase();


    if (filterValue === "all") {

        renderUsers(users);

        return;

    }


    const filteredUsers = users.filter(function (user) {

        return user.name
            .toLowerCase()
            .includes(filterValue);

    });


    renderUsers(filteredUsers);

}


// =====================================================
// POST API - ADD USER
// =====================================================

async function addUser() {

    try {

        const newUser = {

            name: "Krishna",
            email: "krishna@example.com",

            address: {

                city: "Rajahmundry"

            }

        };


        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(newUser)

        });


        if (!response.ok) {

            throw new Error("Failed to add user");

        }


        const data = await response.json();


        console.log("New User:", data);


        // Add new user to local array
        users.push(data);


        // Save updated users
        saveUsers();


        // Render updated list
        renderUsers(users);


        showMessage(
            "User added successfully!"
        );


    } catch (error) {

        console.log(error);

        showMessage(
            "Error: Unable to add user."
        );

    }

}


// =====================================================
// DELETE USER
// =====================================================

async function deleteUser(id) {

    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {

            throw new Error("Delete failed");

        }


        // Remove user from array
        users = users.filter(function (user) {

            return user.id !== id;

        });


        // Save updated array
        saveUsers();


        // Render updated users
        renderUsers(users);


        showMessage(
            "User deleted successfully!"
        );


    } catch (error) {

        console.log(error);

        showMessage(
            "Error: Unable to delete user."
        );

    }

}


// =====================================================
// EVENT HANDLING
// =====================================================

// Search event
searchInput.addEventListener(
    "input",
    searchUsers
);


// Filter event
filterInput.addEventListener(
    "change",
    filterUsers
);


// Load button
loadBtn.addEventListener(
    "click",
    fetchUsers
);


// Add button
addBtn.addEventListener(
    "click",
    addUser
);


// =====================================================
// INITIAL LOAD
// =====================================================

getStoredUsers();


// If Local Storage has users
if (users.length > 0) {

    renderUsers(users);

} else {

    fetchUsers();

}