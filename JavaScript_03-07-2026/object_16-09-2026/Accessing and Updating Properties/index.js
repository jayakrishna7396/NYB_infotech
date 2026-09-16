// / Accessing and Updating Properties
// Definition: Accessing means getting a value from an object.
// Definition: Updating means changing a value in an object.


let student={
    name :"krishna",
    age :20,
    gender :"male"
}

//Accessing properties using dot notation
console.log ("Name:",student.name);
console.log("age:",student.age);
console.log("gender:",student.gender);

//accessing properties using bracket notation
console.log("Name:",student["name"])
console.log("age:",student["age"])


//updating properties using dot notation
student.age= 23;
student.course="javascript"

console.log("updated student:",student.age)
console.log("updated student:",student.course)


//update properties by using bracket notation
student["name"]="jk"
console.log("updated name:",student.name)


