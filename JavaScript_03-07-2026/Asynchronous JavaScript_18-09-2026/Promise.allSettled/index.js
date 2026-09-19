// Promise.allSettled()
// Definition:
// Promise.allSettled() runs multiple Promises
// and waits until all Promises are finished.
// It returns both successful and failed results.

const promise1 = Promise.resolve("Task 1 completed");

const promise2 = Promise.reject("Task 2 failed");

const promise3 = Promise.resolve("Task 3 completed");

Promise.allSettled([promise1, promise2, promise3])
    .then(function (results) {

        console.log(results);

    });