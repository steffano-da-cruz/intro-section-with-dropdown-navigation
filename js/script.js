"use strict";

const navBox = document.querySelector(".header-nav-box");
const navFeatures = document.querySelector(".header-nav-features");
const showFeatures = document.querySelector(".show-features");

navFeatures.addEventListener("click", function () {
  navBox.classList.add("show-features");
});
