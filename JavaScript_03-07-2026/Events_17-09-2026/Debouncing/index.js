// Debouncing
// Definition:
// Debouncing means waiting until the user stops an action
// before running the function.


// Select input
let searchInput = document.getElementById("searchInput");


// Debounce function
function debounce(callback, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(function () {

            callback();

        }, delay);
    };
}


// Function to run
function search() {

    console.log("Searching:", searchInput.value);

}


// Create debounced function
let debouncedSearch = debounce(search, 1000);


// Add input event
searchInput.addEventListener("input", debouncedSearch);