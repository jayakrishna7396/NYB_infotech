// web storage
//in this the data will be stores in the form of an object
//key value pairs
//setitem tp store the data
//getitem to retrieve the data
//removeitem to remove the data
//two types of storage 
//local storage and session storage


// local storage
localStorage.setItem("name","jayakrishna")

console.log(localStorage.getItem("name"))

localStorage.setItem("role","lead")
console.log(localStorage.getItem("role"))

localStorage.removeItem("role")
console.log(localStorage.getItem("role"))

//session storage
sessionStorage.setItem("name","krishna")
sessionStorage.setItem("role","lead")

sessionStorage.clear()
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("role"))

sessionStorage.removeItem("name")
console.log(sessionStorage.getItem("name"))



localStorage.setItem("name","jayakrishna")

console.log(localStorage.getItem("name"))

localStorage.setItem("role","lead")
console.log(localStorage.getItem("role"))

localStorage.removeItem("role")
console.log(localStorage.getItem("role"))

