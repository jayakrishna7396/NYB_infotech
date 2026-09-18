// Local Storage
// Definition:
// Local Storage is used to store data in the browser.
// Data remains after refreshing or closing the browser.


// Select elements

let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let getBtn = document.getElementById("getBtn");
let removeBtn = document.getElementById("removeBtn");
let clearBtn = document.getElementById("clearBtn");


// 1. Save data

saveBtn.addEventListener("click", function () {

    let name = nameInput.value;

    localStorage.setItem("name", name);

    console.log("Data Saved:", name);

});


// 2. Get data

getBtn.addEventListener("click", function () {

    let name = localStorage.getItem("name");

    console.log("Data:", name);

});


// 3. Remove data

removeBtn.addEventListener("click", function () {

    localStorage.removeItem("name");

    console.log("Name removed");

});


// 4. Clear all data

clearBtn.addEventListener("click", function () {

    localStorage.clear();

    console.log("All data removed");

});