let buttons = document.getElementsByClassName(
  "card__rating__container--button"
);

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("card__rating__container--button")) {
    Array.prototype.forEach.call(buttons, function (button) {
      button.classList.remove("active");
    });
    evt.target.classList.add("active");
    value = evt.target.value;
    localStorage.setItem("rating", value);
  }
});
