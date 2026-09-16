let btn=document.getElementById("btn")
let result=document.getElementById("result")


btn.addEventListener("click",function () {
    result.innerHtml+= "startbtn"

    setTimeout(function (){
        result.innerHTML += "Hello after 2 second<br>";
    },2000)
    
    result.innerHtml+="End<br>"

})