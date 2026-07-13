//keyword
// The this keyword refers to the object that is executing the current function. Its value depends on how the function is called, not where it is defined.

//gobal context
console.log(this);

//inside the object mjethod
const student = {
    name: "Krishna",
    age: 22,

    details() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.details();

//regular function
function show() {
    console.log(this);
}

show();

//inside the nested regular function
const person = {
    name: "Rahul",

    display() {

        function inner() {
            console.log(this.name);
        }

        inner();
    }
};

person.display();


//arrow function
const person = {
    name: "Rahul",

    display() {

        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

person.display();

//call method
const person = {
    name: "Krishna"
};

function greet(city) {
    console.log(this.name + " from " + city);
}

greet.call(person, "Hyderabad");

//apply method
const person = {
    name: "Rahul"
};

function greet(city, country) {
    console.log(this.name + " " + city + " " + country);
}

greet.apply(person, ["Delhi", "India"]);


//bind method
const student = {
    name: "Krishna"
};

function display() {
    console.log(this.name);
}

const result = display.bind(student);

result();


//call method
const employee1 = {
    name: "jaya"
};

const employee2 = {
    name: "krishna"
};

function show() {
    console.log(this.name);
}

show.call(employee1);
show.call(employee2);

//by using apply
const calculator = {
    name: "Calculator"
};

function add(a, b) {
    console.log(this.name);
    console.log(a + b);
}

add.apply(calculator, [10, 20]);

//by using bind
const car = {
    brand: "BMW"
};

function display() {
    console.log(this.brand);
}

const showBrand = display.bind(car);


showBrand();



//event handler
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log(this);
});

//arrow function with event handler
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log(this);
});

