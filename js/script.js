"use strict";

const navBox = document.querySelector(".header-nav-box");
const menuBox = document.querySelector(".header-menu-box");
const snapHeader = document.querySelector(".snap-header");
const navFeatures = document.querySelector(".header-nav-features");
const navCompany = document.querySelector(".header-nav-company");
const arrowFeatures = document.querySelector(".features-nav-arrow");
const arrowCompany = document.querySelector(".company-nav-arrow");
const overlay = document.querySelector(".overlay");

menuBox.addEventListener("click", function () {
  if (snapHeader.classList.contains("show-menu")) {
    snapHeader.classList.remove("show-menu");
    overlay.classList.add("hidden");
  } else {
    snapHeader.classList.add("show-menu");
    overlay.classList.remove("hidden");
  }
});

navFeatures.addEventListener("click", function () {
  if (navBox.classList.contains("show-features")) {
    navBox.classList.remove("show-features");
    arrowFeatures.src = `./images/icon-arrow-down.svg`;
  } else {
    navBox.classList.add("show-features");
    arrowFeatures.src = `./images/icon-arrow-up.svg`;
  }
});

navCompany.addEventListener("click", function () {
  if (navBox.classList.contains("show-company")) {
    navBox.classList.remove("show-company");
    arrowCompany.src = `./images/icon-arrow-down.svg`;
  } else {
    navBox.classList.add("show-company");
    arrowCompany.src = `./images/icon-arrow-up.svg`;
  }
});
