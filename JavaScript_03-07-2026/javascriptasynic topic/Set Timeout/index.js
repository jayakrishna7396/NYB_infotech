let btn=document.getElementById("btn")

let result=document.getElementById("result")

btn.addEventListener("click",function () {

    result.textContent="Pleasewait...";

    setTimeout(function () {

        result.textContent = "Hello! 3 seconds completed"
        // console.log("hello! after3seconds")
    },3000)
})




let bttn = document.getElementById("btn");
let message = document.getElementById("message");

bttn.addEventListener("click", function () {

    message.textContent = "Please wait...";

    setTimeout(function () {

        message.textContent = "Hello! 3 seconds completed.";
        console.log("Hello! 3second complete")

    }, 3000);

});