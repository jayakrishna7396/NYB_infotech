// ========================================
// 1. DOM SELECTION
// ========================================

const title = document.getElementById("title");

const form = document.getElementById("userForm");

const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");

const loadBtn = document.getElementById("loadBtn");

const userList = document.getElementById("userList");

const message = document.getElementById("message");


// ========================================
// 2. LOCAL STORAGE
// ========================================

// Get users from Local Storage

let users = JSON.parse(localStorage.getItem("users")) || [];


// Display saved users when page loads

displayUsers();


// ========================================
// 3. DOM MANIPULATION
// ========================================

title.textContent = "My User Manager";


// ========================================
// 4. FORM HANDLING
// ========================================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();


    // Validation

    if (name === "" || email === "") {

        message.textContent = "Please enter name and email.";

        return;
    }


    // Create new user

    const newUser = {
        id: Date.now(),
        name: name,
        email: email
    };


    // Add user to array

    users.push(newUser);


    // Save to Local Storage

    localStorage.setItem("users", JSON.stringify(users));


    // Display users

    displayUsers();


    // Clear form

    nameInput.value = "";

    emailInput.value = "";

    message.textContent = "User added successfully.";

});


// ========================================
// 5. CREATING ELEMENTS DYNAMICALLY
// ========================================

function displayUsers() {

    // Clear old list

    userList.innerHTML = "";


    users.forEach(function (user) {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${user.name}</strong>
            - ${user.email}
            <button class="deleteBtn" data-id="${user.id}">
                Delete
            </button>
        `;


        // Add dynamically created element

        userList.appendChild(li);

    });
}


// ========================================
// 6. EVENT DELEGATION
// ========================================

userList.addEventListener("click", function (event) {

    if (event.target.classList.contains("deleteBtn")) {

        const id = Number(event.target.dataset.id);


        // Remove user

        users = users.filter(function (user) {

            return user.id !== id;

        });


        // Update Local Storage

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        // Display updated users

        displayUsers();

        message.textContent = "User deleted.";

    }

});


// ========================================
// 7. API CALL
// ========================================

loadBtn.addEventListener("click", async function () {

    message.textContent = "Loading users...";


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check API response

        if (!response.ok) {

            throw new Error("API request failed");

        }


        const apiUsers = await response.json();


        // Add API users

        users = apiUsers.map(function (user) {

            return {
                id: user.id,
                name: user.name,
                email: user.email
            };

        });


        // Save API users

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        // Display users

        displayUsers();


        message.textContent = "Users loaded successfully.";

    }

    catch (error) {

        message.textContent =
            "Unable to load users.";

        console.error(error);

    }

});