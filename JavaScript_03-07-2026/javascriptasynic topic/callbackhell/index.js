

// let btn=document.getElementById("btn")
// let result=document.getElementById("result")

// btn.addEventListerner ("click",function() {

//     setTimeout(function (){
//         result.innerHtml += "step 1 <br>"

//         setTimeout(function (){
//             result.innerHtml += "step2 <br>"

//             setTimeout(function (){
//                 result.innerHtml += "step3<br>"
//             },1000);
//         },1000);
//     },1000);
//     console.log(callback)

// })



let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {

    setTimeout(function () {

        result.innerHTML += "Step 1<br>";

        setTimeout(function () {

            result.innerHTML += "Step 2<br>";

            setTimeout(function () {

                result.innerHTML += "Step 3<br>";

            }, 1000);

        }, 1000);

    }, 1000);

});