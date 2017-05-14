var link = document.querySelector(".modal-btn");
var popup = document.querySelector(".modal-form");
/*var arrival-date = popup.querySelector("[name=arrival-date]");
var departure-date = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult]");*/


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-form-invisible");
    popup.classList.toggle("modal-form-visible");
});

/*popup.addEventListener("submit", function(event) {
    if (!arrival-date.value || !departure-date.value || !adult.value) {
        event.preventDefault();
        console.log("Введите, пожалуйста, дату заезда, дату выезда и количество взрослых");
    }
});*/

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-form-visible")) {
            popup.classList.remove("modal-form-visible");
        }
    }
});