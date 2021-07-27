const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector("header.header");
const overlay = document.querySelector(".header .overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        fadeElems.forEach(function (element) {
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
        });
        return;
    }
    header.classList.add("open");
    fadeElems.forEach(function (element) {
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
    });
}

fadeElems.forEach(function (element) {
    element.addEventListener("click", function () {
        console.log(element);
    });
});
