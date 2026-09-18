// Session Storage
// Definition:
// Session Storage stores data for one browser tab/session.
// Data remains after refresh but is removed when the tab is closed.


// Select elements

let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let getBtn = document.getElementById("getBtn");
let removeBtn = document.getElementById("removeBtn");
let clearBtn = document.getElementById("clearBtn");


// 1. Save data

saveBtn.addEventListener("click", function () {

    let name = nameInput.value;

    sessionStorage.setItem("name", name);

    console.log("Data Saved:", name);

});


// 2. Get data

getBtn.addEventListener("click", function () {

    let name = sessionStorage.getItem("name");

    console.log("Data:", name);

});


// 3. Remove data
removeBtn.addEventListener("click", function () {

    sessionStorage.removeItem("name");

    console.log("Name removed");

});


// 4. Clear all data
clearBtn.addEventListener("click", function () {

    sessionStorage.clear();

    console.log("All session data removed");

});