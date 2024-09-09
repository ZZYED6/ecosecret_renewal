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

    var index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

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
      $("li>div", ts).hide();

      $.each(ts, function (i, o) {
        $("button", o).on("click", tabmenu);
        function tabmenu() {
          if ($(this).parent().next().is(":hidden")) {
            $("li > div:visible", o).hide();
            $(this).parent().next().show();
          } else {
            $("li > div:visible", o).hide();
          }
        }
      });
    },
  });

  $(".faq").faq();
});
