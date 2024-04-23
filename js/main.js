window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let header = document.querySelector("header");
        header.classList.add("sticky", window.screenY > 10);
    })
})