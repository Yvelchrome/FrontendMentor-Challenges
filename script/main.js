function triggerHamburger() {
  let hamburger = document.querySelector(".hamburger");
  let mobileNav = document.querySelector(".mobile-nav");
  let mobileBackground = document.querySelector(".mobile-background");

  window.onload = hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("mobile-nav--active");
    mobileBackground.classList.toggle("mobile-background--active");
  });
}

window.onload = triggerHamburger;
