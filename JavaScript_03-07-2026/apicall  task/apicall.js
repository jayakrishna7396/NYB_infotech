

let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/users/1")

        .then((response) => {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })

        .then((data) => {

            result.innerHTML = `
                <h3>${data.name}</h3>
                <p>Email: ${data.email}</p>
                <p>City: ${data.address.city}</p>
            `;

        })

        .catch((error) => {

            result.innerHTML = `<p style="color:red">${error.message}</p>`;

        });

});


