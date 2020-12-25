window.addEventListener("load", function () {
    var arrows = document.getElementsByClassName("arrow");

    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", function () {
            this.parentElement.querySelector(".hidden").classList.toggle("visible");;
            this.classList.toggle("arrow-down");
        });
    }
})