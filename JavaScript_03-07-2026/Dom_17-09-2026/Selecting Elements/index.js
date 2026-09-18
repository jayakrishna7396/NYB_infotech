//selecting the dom
//1.document,getElementById
//2.document.getElementByClassName
//3.document.getElementByTagName
//4.document.querySelector
//5.document.querySelectorAll

//getElementById()--select one element using its id
let title=document.getElementById("title")
console.log(title)


//getelementByClassName--select  element by their class name
let items=document.getElementsByClassName("items")
console.log(items)

//getelementByTagName--select element by their tag name
let paragraph=document.getElementByTagName("p")
console.log(paragraph)

//getelementbyqueryselector--select the first element
let items2 =document.querySelector("items2")
console.log(items2)

//getElementqueryselectorall
let allitems=document.querySelectorAll("allitems")
console.log(allitems)