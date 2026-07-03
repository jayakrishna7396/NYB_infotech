//event bubbling event travels from child element to parent element
//capturing
//delegation


let child=document.getElementById("innertext")
function action(){
console.log("inner h1 clicked")
}
child.addEventListener("click",action)

let parent=document.getElementById("outertext")
function action1(){
    console.log("outertext")}
parent.addEventListener("click",action1)

let div=document.getElementById("div")
function action2(){
    console.log("parent element")
}
div.addEventListener("click",action2)

let div1=document.getElementById("div1")
function action3(){
console.log("top parent clicked")
}
div.addEventListener("click",action3,true)

// let parent=document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1,true)

let list=document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",listclick)

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Parent Div Clicked");
})

child.addEventListener("click", function () {
  console.log("Button Clicked");
})

//window