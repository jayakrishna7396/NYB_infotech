// Async/Await
// Definition:
// async/await is used to work with Promises
// in a simple and readable way.

// Creating a Promise
const promise = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task completed");
    }, 2000);

});

// async function
async function getData() {

    // await waits for the Promise to complete
    const result = await promise;

    console.log(result);
}

getData();