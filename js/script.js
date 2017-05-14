var link = document.querySelector(".modal-btn");
var popup = document.querySelector(".modal-form");

popup.classList.remove("modal-form-visible");
popup.classList.add("modal-form-invisible");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-form-invisible");
    popup.classList.toggle("modal-form-visible");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 && popup.classList.contains("modal-form-visible")) {
        popup.classList.remove("modal-form-visible");
        popup.classList.add("modal-form-invisible");
    }
});