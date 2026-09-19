// Promise.all()
// Definition:
// Promise.all() is used to handle multiple Promises together.
// It waits until all Promises are completed successfully.

const promise1 = Promise.resolve("Task 1 completed");

const promise2 = Promise.resolve("Task 2 completed");

const promise3 = Promise.resolve("Task 3 completed");

Promise.all([promise1, promise2, promise3])
    .then(function (results) {

        console.log(results);

    })
    .catch(function (error) {

        console.log("Error:", error);

    });