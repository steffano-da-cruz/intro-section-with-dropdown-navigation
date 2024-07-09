"use strict";

const navBox = document.querySelector(".header-nav-box");
const menuBox = document.querySelector(".header-menu-box");
const showMenu = document.querySelector(".snap-header");
const navFeatures = document.querySelector(".header-nav-features");
const navCompany = document.querySelector(".header-nav-company");
const arrowFeatures = document.querySelector(".features-nav-arrow");
const arrowCompany = document.querySelector(".company-nav-arrow");

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

menuBox.addEventListener("click", function () {
  showMenu.classList.add("show-menu");
});
