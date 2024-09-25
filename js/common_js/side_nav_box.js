"use strict";
//로딩 화면
const loading = document.getElementById("loading");
window.onload = function () {
  loading.style.display = "none";
};

const openIcon = document.querySelector(".snb_open-icon");
const closeIcon = document.querySelector(".snb_close-icon");
const sideNav = document.querySelector("#side_nav_box");
const overlay = document.querySelector("#overlay");

function clickSideNav() {
  openIcon.addEventListener("click", showSideNav);
}

clickSideNav();

function showSideNav() {
  overlay.style.display = "block"; // 배경 즉시 나타나기
  setTimeout(() => {
    overlay.style.opacity = "1"; // 배경 불투명도 변경
  }, 10);
  sideNav.style.display = "flex"; // 사이드 네비 설정
  setTimeout(() => {
    sideNav.style.opacity = "1"; // 불투명도 변경
    sideNav.style.transform = "translateX(0)"; // 원래 위치로 이동
  }, 10);
}

closeIcon.onclick = function () {
  sideNav.style.opacity = "0"; // 불투명도 줄이기
  sideNav.style.transform = "translateX(100%)"; // 오른쪽으로 이동
  overlay.style.opacity = "0"; // 배경 불투명도 줄이기
  setTimeout(() => {
    sideNav.style.display = "none"; // 잠시 후에 사이드 네비 숨기기
    overlay.style.display = "none"; // 배경 숨기기
  }, 300); // transition 시간과 동일하게 설정
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
