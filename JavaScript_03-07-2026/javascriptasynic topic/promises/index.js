let btn=document.getElementById("btn")
let result=document.getElementById("result")

btn.addEventListener("click",function (){
    let promise=new promise(function(resolve,reject){
        if (success) {
            resolve("promise successfull")
        } else {
            reject("promise failed")
        }
        promises.then(function(data){
            result.textcontent=data
        })
    })
})