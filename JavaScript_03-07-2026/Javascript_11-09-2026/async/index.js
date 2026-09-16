const output = document.getElementById("output");

function print(message) {
    output.innerHTML += `<p>${message}</p>`;
}


// ======================================
// 1. SYNCHRONOUS JAVASCRIPT
// ======================================

function synchronousExample() {

    print("1. Synchronous: Task 1");
    print("2. Synchronous: Task 2");
    print("3. Synchronous: Task 3");
}


// ======================================
// 2. setTimeout()
// ======================================

function timeoutExample() {

    print("4. setTimeout started");

    setTimeout(() => {
        print("5. setTimeout executed after 2 seconds");
    }, 2000);
}


// ======================================
// 3. setInterval()
// 4. clearInterval()
// ======================================

function intervalExample() {

    let count = 0;

    const intervalId = setInterval(() => {

        count++;

        print("Interval: " + count);

        if (count === 3) {

            clearInterval(intervalId);

            print("6. clearInterval stopped the interval");
        }

    }, 1000);
}


// ======================================
// 5. clearTimeout()
// ======================================

function clearTimeoutExample() {

    const timeoutId = setTimeout(() => {

        print("This message will not appear");

    }, 3000);

    clearTimeout(timeoutId);

    print("7. clearTimeout cancelled the timeout");
}


// ======================================
// 6. CALLBACK FUNCTION
// ======================================

function greet(name, callback) {

    print("8. Hello " + name);

    callback();
}

function callbackExample() {

    greet("Krishna", function () {

        print("9. Callback function executed");

    });
}


// ======================================
// 7. CALLBACK HELL
// ======================================

function callbackHellExample() {

    print("10. Callback Hell started");

    setTimeout(() => {

        print("Step 1");

        setTimeout(() => {

            print("Step 2");

            setTimeout(() => {

                print("Step 3");

            }, 500);

        }, 500);

    }, 500);
}


// ======================================
// 8. PROMISE
// ======================================

function createPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("11. Promise successful");

        }, 1000);

    });
}


// ======================================
// 9. .then()
// 10. .catch()
// 11. .finally()
// ======================================

function promiseExample() {

    createPromise()

        .then((result) => {

            print(result);

        })

        .catch((error) => {

            print("Error: " + error);

        })

        .finally(() => {

            print("12. finally() executed");

        });
}


// ======================================
// 12. Promise.all()
// ======================================

function promiseAllExample() {

    const p1 = Promise.resolve("Apple");
    const p2 = Promise.resolve("Banana");
    const p3 = Promise.resolve("Mango");

    Promise.all([p1, p2, p3])

        .then((result) => {

            print("13. Promise.all(): " + result.join(", "));

        });
}


// ======================================
// 13. Promise.race()
// ======================================

function promiseRaceExample() {

    const p1 = new Promise(resolve => {

        setTimeout(() => {
            resolve("Slow Promise");
        }, 2000);

    });

    const p2 = new Promise(resolve => {

        setTimeout(() => {
            resolve("Fast Promise");
        }, 1000);

    });

    Promise.race([p1, p2])

        .then((result) => {

            print("14. Promise.race(): " + result);

        });
}


// ======================================
// 14. Promise.allSettled()
// ======================================

function promiseAllSettledExample() {

    const p1 = Promise.resolve("Success");

    const p2 = Promise.reject("Failed");

    Promise.allSettled([p1, p2])

        .then((results) => {

            print("15. Promise.allSettled():");

            results.forEach((result) => {

                print(
                    result.status
                );

            });

        });
}


// ======================================
// 15. Promise.any()
// ======================================

function promiseAnyExample() {

    const p1 = Promise.reject("Failed 1");

    const p2 = new Promise(resolve => {

        setTimeout(() => {
            resolve("Success Promise");
        }, 1000);

    });

    const p3 = Promise.reject("Failed 3");

    Promise.any([p1, p2, p3])

        .then((result) => {

            print("16. Promise.any(): " + result);

        })

        .catch((error) => {

            print("All promises failed");

        });
}


// ======================================
// 16. ASYNC / AWAIT
// ======================================

async function asyncAwaitExample() {

    try {

        const result = await createPromise();

        print("17. Async/Await: " + result);

    } catch (error) {

        print("Error: " + error);

    }

}


// ======================================
// 17. ERROR HANDLING
// ======================================

function errorHandlingExample() {

    try {

        let user = null;

        console.log(user.name);

    } catch (error) {

        print("18. Error handled: " + error.message);

    } finally {

        print("19. Error handling completed");

    }
}


// ======================================
// START PROGRAM
// ======================================

document.getElementById("startBtn").addEventListener("click", () => {

    output.innerHTML = "";

    synchronousExample();

    timeoutExample();

    intervalExample();

    clearTimeoutExample();

    callbackExample();

    callbackHellExample();

    promiseExample();

    promiseAllExample();

    promiseRaceExample();

    promiseAllSettledExample();

    promiseAnyExample();

    asyncAwaitExample();

    errorHandlingExample();

});