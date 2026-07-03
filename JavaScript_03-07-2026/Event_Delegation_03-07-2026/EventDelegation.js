//event delegation is a technique where you attach one event listener to aparent element instead of attaching event listeners to each child element individually

document.getElementById("container").addEventListener("click", (hi)=>{
    if (hi.target.tagName === "BUTTON"){
        console.log(hi.target.innerText)
    }

})