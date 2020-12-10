const btnHambuger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll('.has-fade');

btnHambuger.addEventListener('click', function() {
    if (header.classList.contains('open')) { // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function (fadeElem) {
            fadeElem.classList.remove('fade-in');
            fadeElem.classList.add('fade-out');
        });
    } else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (fadeElem) {
            fadeElem.classList.remove('fade-out');
            fadeElem.classList.add('fade-in');
        });
    }
})