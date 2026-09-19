// Fetch API
// GET, POST, PUT, PATCH, DELETE

// GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("GET:", data);
    });


// POST
fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API",
        userId: 1
    })

})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("POST:", data);
    });


// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1
    })

})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("PUT:", data);
    });


// PATCH
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "New Title"
    })

})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("PATCH:", data);
    });


// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "DELETE"

})
    .then(function (response) {
        console.log("DELETE Status:", response.status);
    });