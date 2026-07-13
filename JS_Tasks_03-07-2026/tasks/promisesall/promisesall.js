//promises all
// Promise.all() waits until all promises are successfully resolved. If any one promise fails, it immediately rejects.
Promise.all([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(error => console.log(error));



 //promises all resolve
 const p1 = new Promise(resolve =>
    setTimeout(() => resolve("HTML"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("CSS"), 2000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("JavaScript"), 3000)
);

Promise.all([p1, p2, p3])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

//promises one reject
const p1 = Promise.resolve("Task 1");

const p2 = Promise.reject("Task 2 Failed");

const p3 = Promise.resolve("Task 3");

Promise.all([p1, p2, p3])
.then(result => console.log(result))
.catch(error => console.log(error));


//promises race()
// Returns the first promise that settles (either resolves or rejects).
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("Server A"), 3000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Server B"), 1000)
);

Promise.race([p1, p2])
.then(result => console.log(result))
.catch(error => console.log(error));

//promise.allsettled
// Waits until all promises finish, regardless of whether they succeed or fail.
const p1 = Promise.resolve("Login");

const p2 = Promise.reject("Network Error");

const p3 = Promise.resolve("Dashboard");

Promise.allSettled([p1, p2, p3])
.then(result => console.log(result));


// promises.any()
// Returns the first successfully resolved promise.
// Ignores rejected promises unless all promises fail.
const p1 = Promise.reject("Server A");

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Server B"), 2000)
);

const p3 = Promise.resolve("Server C");

Promise.any([p1, p2, p3])
.then(result => console.log(result))
.catch(error => console.log(error));

//all reject
const p1 = Promise.reject("Error 1");

const p2 = Promise.reject("Error 2");

Promise.any([p1, p2])
.catch(error => console.log(error));

//pendinng
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Done");
    }, 3000);
});

//success
Promise.resolve("Success")
.then(result => console.log(result));

//reject
Promise.reject("Invalid User")
.catch(error => console.log(error));

