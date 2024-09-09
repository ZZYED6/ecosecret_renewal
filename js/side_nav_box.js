"use strict";

const openIcon = document.querySelector(".snb_open-icon");
const coloseIcon = document.querySelector(".snb_close-icon");
const sideNav = document.querySelector("#side_nav_box");

function clickSideNav() {
  // .snb_open-icon 클릭하면 showSideNav 실행
  openIcon.addEventListener("click", showSideNav);
}

clickSideNav();

function showSideNav() {
  // #side_nav_box를 나타내기
  sideNav.style.display = "flex";
}

coloseIcon.onclick = function () {
  //.snb_close-icon 클릭하면  #side_nav_box 숨기기
  sideNav.style.display = "none";
};
