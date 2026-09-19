// Fetch API
// Definition:
// Fetch API is used to communicate with
// a server or API and get or send data.

// GET request

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        console.log(data);

    })

    .catch(function (error) {

        console.log("Error:", error);

    });