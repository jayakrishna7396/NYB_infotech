// ==========================================
// 1. Fetch API
// ==========================================

// Definition:
// Fetch API is used to communicate with a server/API
// and get or send data.

// Syntax:
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// ==========================================
// 2. GET Request
// ==========================================

// Definition:
// GET request is used to retrieve data from an API.

// Syntax:
// fetch(url, {
//   method: "GET"
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {

    // ==========================================
    // 3. API Response Handling
    // ==========================================

    // Check whether API response is successful
    if (!response.ok) {
      throw new Error("API request failed");
    }

    // Convert response to JSON
    return response.json();
  })

  // ==========================================
  // 4. .then()
  // ==========================================

  // Definition:
  // .then() executes when the Promise is successful.

  .then((data) => {
    console.log("GET Response:");
    console.log(data);
  })

  // ==========================================
  // 5. .catch()
  // ==========================================

  // Definition:
  // .catch() handles errors/rejected Promises.

  .catch((error) => {
    console.log("Error:", error.message);
  });


// ==========================================
// 6. POST Request
// ==========================================

// Definition:
// POST request is used to send data to an API.

// Syntax:
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    title: "React",
    body: "Learning API",
    userId: 1
  })
})
  .then((response) => {

    if (!response.ok) {
      throw new Error("POST request failed");
    }

    return response.json();
  })

  .then((data) => {
    console.log("POST Response:");
    console.log(data);
  })

  .catch((error) => {
    console.log("POST Error:", error.message);
  });


// ==========================================
// 7. Promises
// ==========================================

// Definition:
// A Promise represents the future result of an
// asynchronous operation.
//
// Promise has three states:
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Fetch() returns a Promise.


// ==========================================
// 8. Async/Await
// ==========================================

// Definition:
// async/await provides a simpler way to work
// with Promises.

// Syntax:
//
// async function functionName() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }


// ==========================================
// 9. Async/Await GET Request
// ==========================================

const getUsers = async () => {

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // ==========================================
    // 10. Error Handling with APIs
    // ==========================================

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    console.log("Async/Await Response:");
    console.log(data);

  } catch (error) {

    console.log("API Error:", error.message);

  }
};

getUsers();