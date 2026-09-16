// Nested Object
// Definition: A nested object is an object inside another object.

let student={
    name:"krishna",
    age: 22,

    address: {
        city: "rajahmundry" ,  
        state: "andhrapradesh",
        pincode: 533124
     }
}

//access normal object properties
console.log(student.name);
console.log(student.age);

//access nested object properties
console.log("city",student.address.city);
console.log("city",student.address.state);
console.log("city",student.address.pincode)