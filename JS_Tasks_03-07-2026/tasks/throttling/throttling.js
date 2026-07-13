//throttling function
// Throttling limits how often a function can execute within a specified time interval.
function throttle(func, delay) {

    let lastCall = 0;

    return function () {

        const now = Date.now();

        if (now - lastCall >= delay) {

            lastCall = now;

            func();

        }

    };

}

const showMessage = throttle(function () {

    console.log("Button Clicked");

}, 2000);

document.getElementById("btn")
.addEventListener("click", showMessage);



// Normal Event vs Throttling vs Debouncing
// Normal Event
button.addEventListener("click", function () {

    console.log("Clicked");

});


//Debounced Event
input.addEventListener("input", debounce(search, 1000));