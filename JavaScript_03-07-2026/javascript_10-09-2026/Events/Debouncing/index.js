let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

let timer;

searchInput.addEventListener("input", function () {

    clearTimeout(timer);

    timer = setTimeout(function () {

        searchResult.textContent =
            "Searching for: " + searchInput.value;

        console.log("API/Search executed");

    }, 500);

});