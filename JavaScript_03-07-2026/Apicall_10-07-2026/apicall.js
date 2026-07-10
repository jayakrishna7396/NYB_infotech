//API(application programming interface)

//api methods are four types
//get    --->fetching the data
//post   --->to send the data
//put    --->it changes the entire record
//patch  --->uodate the partial data
//delete --->to delete the data

//JSON(javascript object notation) apis usually send data in json
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });




//single member id
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });



//post
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Krishna",
    email: "krishna@gmail.com"
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
  

//put
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Jaya Krishna",
    email: "jayakrishna@gmail.com"
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});


//delete
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
})
.then(() => {
  console.log("User Deleted");
});


//updata data
const student = {
  name: "krishna",
  course: "JavaScript"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(student)
})
.then(response => response.json())
.then(data => {
  console.log(data);
});