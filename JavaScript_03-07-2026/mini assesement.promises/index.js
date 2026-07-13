//storage
export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function saveUser(name) {
    sessionStorage.setItem("username", name);
}

export function getUser() {
    return sessionStorage.getItem("username");
}

//api(async/await+api)
export async function getQuote() {

    try {

        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok)
            throw new Error("API Error");

        const data = await response.json();

        return data.quote;

    }

    catch (error) {

        return error.message;

    }

}

//promises
export function demoPromise() {

    let p = new Promise((resolve, reject) => {

        let success = true;

        if (success)

            resolve("Promise Resolved");

        else

            reject("Promise Rejected");

    });

    return p;

}

//iterator.js
// Custom Iterator
export function taskIterator(tasks) {

    let index = 0;

    return {

        next() {

            if (index < tasks.length) {

                return {

                    value: tasks[index++],

                    done: false

                }

            }

            return {

                done: true

            }

        }

    }

}


// utils.js
export function display(task) {

    const li = document.createElement("li");

    li.textContent = task;

    document.getElementById("list").append(li);

}


//app.js
import { saveTasks, getTasks } from "./storage.js";

import { getQuote } from "./api.js";

import { demoPromise } from "./promise.js";

import { taskIterator, taskGenerator } from "./iterator.js";

import { display } from "./utils.js";

let tasks = getTasks();

tasks.forEach(display);

// Add Task

document.getElementById("add").addEventListener("click", () => {

    try {

        let task = document.getElementById("task").value;

        if (task === "")

            throw new Error("Task Cannot be Empty");

        tasks.push(task);

        saveTasks(tasks);

        display(task);

    }

    catch (err) {

        alert(err.message);

    }

});

// API

document.getElementById("quote").addEventListener("click", async () => {

    let quote = await getQuote();

    document.getElementById("message").innerHTML = quote;

});

// Promise

demoPromise()

.then(result => console.log(result))

.catch(error => console.log(error));

// Destructuring

const person = {

    name: "Krishna",

    age: 23,

    city: "Hyderabad"

};

const { name, age } = person;

console.log(name);

console.log(age);

// Iterator

const iterator = taskIterator(tasks);

console.log(iterator.next());

console.log(iterator.next());

// Generator

const gen = taskGenerator(tasks);

console.log(gen.next());

console.log(gen.next());