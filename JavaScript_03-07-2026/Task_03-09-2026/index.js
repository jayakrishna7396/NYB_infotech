const usersDiv = document.getElementById("users");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function fetchUsers() {

    try {
        // Show loading
        loading.style.display = "block";

        // Fetch data
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check API status
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response to JSON
        const users = await response.json();

        // Hide loading
        loading.style.display = "none";

        // Display data
        users.forEach(user => {

            const userDiv = document.createElement("div");

            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
                <hr>
            `;

            usersDiv.appendChild(userDiv);
        });

    } catch (err) {

        // Hide loading
        loading.style.display = "none";

        // Show error
        error.textContent = "Unable to fetch data from API.";
        console.log(err);
    }
}

fetchUsers();