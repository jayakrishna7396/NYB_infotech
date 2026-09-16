let btn=document.getElementById("btn")
let result=document.getElementById("result")

btn.addEvenListerner("cick",function(){
    let timer =setTimeout(function(){
        console.log("hello")

    },3000)
    clearTimeout(timer)
})