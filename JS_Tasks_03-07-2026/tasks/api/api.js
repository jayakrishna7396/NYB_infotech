//JavaScript provides several ways to display output.
//Method	Purpose
//console.log()	Display output in the browser console
//document.write()	Write content directly to the webpage
//innerHTML	Insert HTML into an element
//textContent	Insert plain text into an element
//alert()	Show a popup message

//console.log()
console.log("Hello JavaScript");
console.log(10 + 20);


// alert()
alert("Welcome to JavaScript");


// Browser Object Model (BOM)
// The Browser Object Model (BOM) allows JavaScript to interact with the browser itself.
// Window Dimensions
console.log(window.innerWidth);
console.log(window.innerHeight);

//Open a New Window
window.open("https://www.google.com");

// Close Current Window
window.close();

// Timer
setTimeout(() => {
    alert("Executed after 3 seconds");
}, 3000);

// Interval
let count = 0;

let timer = setInterval(() => {
    count++;
    console.log(count);

    if (count === 5) {
        clearInterval(timer);
    }
}, 1000);

// Navigator Object
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.userAgent);

// Location Object
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

// History Object
history.back();
history.forward();
history.go(-2);

//fetech users
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


//async and await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        console.log(users);
    }
    catch(error) {
        console.log(error);
    }
}

getUsers();    



// Display API Data on a Webpage
async function loadUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    let output = "";

    users.forEach(user => {
        output += `
            <div>
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        `;
    });

    document.getElementById("users").innerHTML = output;

}

// Display Posts Dynamically
async function loadPosts(){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    let html = "";

    posts.slice(0,5).forEach(post=>{

        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;

    });

    document.getElementById("posts").innerHTML = html;

}


// API Success and Error Handling
async function getData() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }

        const data = await response.json();

        console.log(data);

    }

    catch(error) {

        console.log("Error:", error.message);

    }

    finally {

        console.log("Request Completed");

    }

}

getData();