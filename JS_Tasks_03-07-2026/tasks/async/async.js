//async and await
//then()
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Jaya Krishna");
        }, 2000);
    });
}

getUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

    //same program using async/await
    function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Jaya Krishna");
        }, 2000);
    });
}

async function displayUser() {
    const user = await getUser();
    console.log(user);
}

displayUser();

//fetch  api with async/await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}

getUsers();

//Practice Error Handling with Async/Await
function login(success) {
    return new Promise((resolve, reject) => {

        if(success){
            resolve("Login Successful");
        }
        else{
            reject("Invalid Username or Password");
        }

    });
}

async function checkLogin() {

    try{
        const result = await login(false);
        console.log(result);
    }

    catch(error){
        console.log(error);
    }

}

checkLogin();


//object destructing
const student = {
    name: "Krishna",
    age: 22,
    city: "Hyderabad"
};

const {name, age, city} = student;

console.log(name);
console.log(age);
console.log(city);


//aray destructing
const numbers = [10,20,30,40];

const [a,b,c,d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//implement Iterators
// Array Iterator
const fruits = ["Apple","Banana","Orange"];

const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//create generation function
function* numbers(){

    yield 1;
    yield 2;
    yield 3;

}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Small Program Combining Async/Await and Destructuring
//  Fetch User
async function getUser() {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const user = await response.json();

        const {name,email,phone} = user;

        console.log(name);
        console.log(email);
        console.log(phone);

    }

    catch(error){

        console.log(error);

    }

}

getUser();

// Async Function Returning an Object
function getStudent(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve({
                id:101,
                name:"Krishna",
                course:"JavaScript"
            });

        },1000);

    });

}

async function showStudent(){

    const {id,name,course} = await getStudent();

    console.log(id);
    console.log(name);
    console.log(course);

}

showStudent();