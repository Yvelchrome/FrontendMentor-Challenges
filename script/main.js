function triggerHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileBackground = document.querySelector(".mobile-background");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("mobile-nav--active");
    mobileBackground.classList.toggle("mobile-background--active");
  });
}

function triggerFeatures() {
  const featuresButton = document.querySelector(".navbar__dropdown--features");
  const features = document.querySelector(
    ".navbar__dropdown__submenu--features"
  );
  const dropdownArrow = document.querySelector(".dropdownArrow--features");

  featuresButton.addEventListener("click", function () {
    features.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".navbar__dropdown--features") &&
      !e.target.closest(".navbar__dropdown__submenu--features") &&
      !e.target.closest(".dropdownArrow--features")
    ) {
      features.classList.remove("active");
      dropdownArrow.classList.remove("active");
    }
  });
}

function triggerCompany() {
  const companyButton = document.querySelector(".navbar__dropdown--company");
  const company = document.querySelector(".navbar__dropdown__submenu--company");
  const dropdownArrow = document.querySelector(".dropdownArrow--company");

  companyButton.addEventListener("click", function () {
    company.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (
      !company.contains(e.target) &&
      !companyButton.contains(e.target) &&
      company.classList.contains("active")
    ) {
      company.classList.remove("active");
      dropdownArrow.classList.remove("active");
    }
  });
}

function triggerMobileFeatures() {
  const featuresButton = document.querySelector(".dropdown--features");
  const features = document.querySelector(
    ".mobile-nav__dropdown__submenu--features"
  );
  const dropdownArrow = document.querySelector(
    ".dropdownMobileArrow--features"
  );

  featuresButton.addEventListener("click", function () {
    features.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
  });
}

function triggerMobileCompany() {
  const companyButton = document.querySelector(".dropdown--company");
  const company = document.querySelector(
    ".mobile-nav__dropdown__submenu--company"
  );
  const dropdownArrow = document.querySelector(".dropdownMobileArrow--company");

  companyButton.addEventListener("click", function () {
    company.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
  });
}

triggerHamburger();
triggerFeatures();
triggerCompany();
triggerMobileFeatures();
triggerMobileCompany();
