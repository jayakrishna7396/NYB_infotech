const API_URL = "https://jsonplaceholder.typicode.com/users";

const result = document.getElementById("result");
const loading = document.getElementById("loading");
const error = document.getElementById("error");


// ====================================
// GET REQUEST
// ====================================

async function getUsers() {

    loading.innerText = "Loading...";
    error.innerText = "";
    result.innerHTML = "";

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach(user => {

            result.innerHTML += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                    <hr>
                </div>
            `;

        });

    } catch (err) {

        error.innerText = "Error: " + err.message;

    } finally {

        loading.innerText = "";

    }
}


// ====================================
// POST REQUEST
// ====================================

async function addUser() {

    loading.innerText = "Adding user...";
    error.innerText = "";

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Krishna",
                email: "krishna@gmail.com"
            })

        });

        if (!response.ok) {
            throw new Error("Failed to add user");
        }

        const data = await response.json();

        result.innerHTML = `
            <h3>User Added</h3>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
        `;

    } catch (err) {

        error.innerText = "Error: " + err.message;

    } finally {

        loading.innerText = "";

    }
}


// ====================================
// PUT REQUEST
// ====================================

async function updateUser() {

    loading.innerText = "Updating user...";
    error.innerText = "";

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Updated Krishna",
                email: "updated@gmail.com"
            })

        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        const data = await response.json();

        result.innerHTML = `
            <h3>User Updated</h3>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
        `;

    } catch (err) {

        error.innerText = "Error: " + err.message;

    } finally {

        loading.innerText = "";

    }
}


// ====================================
// PATCH REQUEST
// ====================================

async function patchUser() {

    loading.innerText = "Updating name...";
    error.innerText = "";

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Krishna Updated"
            })

        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        const data = await response.json();

        result.innerHTML = `
            <h3>User Name Updated</h3>
            <p>Name: ${data.name}</p>
        `;

    } catch (err) {

        error.innerText = "Error: " + err.message;

    } finally {

        loading.innerText = "";

    }
}


// ====================================
// DELETE REQUEST
// ====================================

async function deleteUser() {

    loading.innerText = "Deleting user...";
    error.innerText = "";

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "DELETE"

        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }

        result.innerHTML = "<h3>User deleted successfully!</h3>";

    } catch (err) {

        error.innerText = "Error: " + err.message;

    } finally {

        loading.innerText = "";

    }
}