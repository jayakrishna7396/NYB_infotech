let btn=document.getElementById("btn")
let result=document.getElementById("result")

btn.addEventListener("click",function () {
    let count=0;
    setInterval(function(){
        count++;
        result.innerhtml +=count +"<br>";
    },1000)
    console.log("hellogood morning")
})