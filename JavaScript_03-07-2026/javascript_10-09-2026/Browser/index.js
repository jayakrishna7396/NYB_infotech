function runProgram() {

    // 1. BOM (Browser Object Model)
    // Definition:
    // BOM allows JavaScript to interact with
    // the browser window.
    //
    // Syntax:
    // window.property;
    //
    // Example:
    // window.innerWidth

    let browserWidth = window.innerWidth;
    let browserHeight = window.innerHeight;
    let currentURL = location.href;


    // 2. Output Methods
    // Definition:
    // Output methods are used to display
    // information or results.
    //
    // Syntax:
    // console.log(value);
    // alert(value);
    // element.textContent = value;
    //
    // Example:
    // console.log("Hello");
   

    console.log("Browser Width:", browserWidth);
    console.log("Browser Height:", browserHeight);
    console.log("Current URL:", currentURL);



    // 3. Local Storage
    // Definition:
    // Local Storage stores data in the browser
    // and keeps it even after closing the browser.
    //
    // Syntax:
    // localStorage.setItem("key", "value");
    // localStorage.getItem("key");
    //
    // Example:
    // localStorage.setItem("name", "John");
   

    localStorage.setItem("name", "John");

    let name = localStorage.getItem("name");


    // 4. Session Storage
    // Definition:
    // Session Storage stores data temporarily
    // for the current browser tab/session.
    //
    // Syntax:
    // sessionStorage.setItem("key", "value");
    // sessionStorage.getItem("key");
    //
    // Example:
    // sessionStorage.setItem("course", "JavaScript");
    

    sessionStorage.setItem("course", "JavaScript");

    let course = sessionStorage.getItem("course");


    
    // Display Output
    

    console.log("Name:", name);
    console.log("Course:", course);

    alert("Welcome " + name);

    document.getElementById("result").textContent =
        "Name: " + name +
        " | Course: " + course +
        " | Browser Width: " + browserWidth + "px";
}