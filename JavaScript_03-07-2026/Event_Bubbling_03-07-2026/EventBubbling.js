//event bubbling:- is the process where an event starts from the target(child)element and then "bubbles up" through its parent elements unitl it reaches the document.
//imagine u have a 3 boxes
// button(child)
//parent
//grandparent
//great grandparent
//upward movement is called event bubbling
document.getElementById("grandparent").addEventListener("click",()=>{
console.log("Grandparent clicked")
})
document.getElementById("parent").addEventListener("click",()=>{
    event.stopPropagation()
console.log("parent clicked")
})
document.getElementById("child").addEventListener("click",()=>{
    //stop propagation used to stop event bubbling 
    event.stopPropagation()
console.log("btn clicked")
})

//event bubbling
document.getElementById("grandparent").addEventListener("click", (hi)=>{
    if (hi.target.tagName === "BUTTON"){
        console.log(hi.target.innerText)
    }

})