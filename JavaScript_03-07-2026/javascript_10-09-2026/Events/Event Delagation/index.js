let productList = document.getElementById("productList");

productList.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {
        console.log("Clicked:", event.target.textContent);
    }

});