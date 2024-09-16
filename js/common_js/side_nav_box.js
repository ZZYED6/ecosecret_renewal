"use strict";

const openIcon = document.querySelector(".snb_open-icon");
const closeIcon = document.querySelector(".snb_close-icon");
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

closeIcon.onclick = function () {
  //.snb_close-icon 클릭하면  #side_nav_box 숨기기
  sideNav.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  const sidePrdList = document.querySelector(".side_prd_list > a");
  const listTypes = document.querySelectorAll(".list_type");

  sidePrdList.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 클릭 동작 방지
    listTypes.forEach(function (list) {
      if (list.style.display === "block") {
        list.style.display = "none"; // 닫기
      } else {
        list.style.display = "block"; // 열기
      }
    });
  });
});
