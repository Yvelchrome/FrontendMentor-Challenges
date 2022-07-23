function showAndDelete() {
  let storedRating = localStorage.getItem("rating");
  let rating_value = `<span class="rating">You selected ${storedRating} out of 5</span>`;
  document.getElementById("value").innerHTML = rating_value;
  localStorage.removeItem("rating");
  if (!storedRating) {
    window.location.href = "../../index.html";
  }
}
window.onload = showAndDelete;
