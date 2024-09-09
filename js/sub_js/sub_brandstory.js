$(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let conceptTpoint = $("#concept").offset().top - $(window).height() + 1000;

    if (scrollTop > conceptTpoint) {
      // 1. "eco"가 분리되어 아래로 이동
      $("#txt_eco").addClass("moving");

      setTimeout(function () {
        // 2. "secret"이 분리되어 아래로 이동
        $("#txt_secret").addClass("moving");
      }, 300);
    } else {
      // 스크롤이 위로 올라가서 triggerPoint보다 작을 때 원래 상태로 복귀
      $("#txt_eco").removeClass("moving");
      $("#txt_secret").removeClass("moving");
    }

    let keywordTpoint = $("#keyword").offset().top - $(window).height() + 900;

    if (scrollTop > keywordTpoint) {
      // change_text 내용 변경
      $(".change_text span").text("UNIQUE & TRENDY");
      $(".change_text p").html(
        "각각의 원료와 성분이 가진 고유한 특징으로<br />개성있는 뷰티 시크릿을 선사합니다."
      );

      // key_img 이미지 변경
      $(".key_img img").attr("src", "../img/contents/brandstory/key_img_2.jpg");
      $(".key_img img").attr("alt", "key_img_2");
    } else {
      // 원래 내용으로 되돌리기
      $(".change_text span").text("NATURAL & HEALTHY");
      $(".change_text p").html(
        "자연에서 오는 원료 그대로의 효능을 담아<br />건강한 아름다움을 선사합니다."
      );

      // 원래 이미지로 되돌리기
      $(".key_img img").attr("src", "../img/contents/brandstory/key_img_1.jpg");
      $(".key_img img").attr("alt", "key_img_1");
    }
  });
});