$(document).ready(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });
});
