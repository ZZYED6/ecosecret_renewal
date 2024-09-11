$(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });

  // 초기 설정: 첫번째 카테고리 선택된 상태로 시작
  $(".title_box_1").addClass("active");
  $(".detail_1").show();
  $(".con_detail > li").not(".detail_1").hide(); // 첫번째 외에는 숨김

  // 버튼 클릭 이벤트
  $(".con_title > li").on("click", function (e) {
    e.preventDefault(); // 기본 동작 막기

    let index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

    // 모든 버튼에서 active 클래스 제거
    $(".con_title > li").removeClass("active");

    // 클릭한 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 카테고리 숨기기
    $(".con_detail > li").hide();

    // 클릭한 버튼에 해당하는 카테고리 내용만 표시
    $(".detail_" + index).show();
  });

  //faq
  $.fn.extend({
    faq: function () {
      let ts = $(this);

      // 페이지 로딩 시 모든 답변 숨기기
      $("li > div", ts).hide();

      $.each(ts, function (i, o) {
        $("button", o).on("click", tabmenu);
        function tabmenu() {
          // 클릭된 버튼 내 이미지 선택
          let $clickedButton = $(this);
          let $clickedImg = $("img", $clickedButton); // 클릭된 버튼의 이미지
          let originalSrc = $clickedImg.data("original-src"); // 원래 이미지 src
          let newSrc = $clickedImg.data("new-src"); // 변경할 이미지 src

          // 답변 토글
          if ($clickedButton.parent().next().is(":hidden")) {
            // 다른 열려있는 div가 있을 경우 숨기기
            $("li > div:visible", o).hide();
            // 현재 버튼의 div 열기
            $clickedButton.parent().next().show();

            // 모든 버튼의 이미지를 원래 상태로 복구
            $("img", o).each(function () {
              let $img = $(this);
              $img.attr("src", $img.data("original-src")); // 원래 이미지로 변경
            });

            // 클릭된 버튼의 이미지를 새로운 이미지로 변경
            $clickedImg.attr("src", newSrc); // 새로운 이미지로 변경
          } else {
            // 현재 버튼의 div 숨기기
            $clickedButton.parent().next().hide();

            // 모든 버튼의 이미지를 원래 상태로 복구
            $("img", o).each(function () {
              let $img = $(this);
              $img.attr("src", $img.data("original-src")); // 원래 이미지로 변경
            });
          }
        }
      });
    },
  });

  $(".faq").faq();
});
