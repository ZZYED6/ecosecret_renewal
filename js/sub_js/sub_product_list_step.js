$(document).ready(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });

  // 초기 설정: 단계별 카테고리 보여짐
  $(".title_box_1").addClass("active");
  $(".type_btn_list").show();
  // 초기 설정: 단계별의 리스트가 선택된 상태로 시작
  $(".t_btn_choice").addClass("active");
  $(".t_list").show();
  $(".list_wrap li").not(".t_list").hide(); // 첫번째 외에는 숨김

  // // 버튼 클릭 이벤트
  // $(".type_btn_list li").on("click", function (e) {
  //   e.preventDefault(); // 기본 동작 막기

  //   let index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

  //   // 모든 버튼에서 active 클래스 제거
  //   $(".type_btn_list li").removeClass("active");

  //   // 클릭한 버튼에만 active 클래스 추가
  //   $(this).addClass("active");

  //   // 모든 카테고리 숨기기
  //   $(".list_wrap li").hide();

  //   // 클릭한 버튼에 해당하는 카테고리 내용만 표시
  //   $(".type_btn_list_" + index).show();
  //   $(".t_list_" + index).show();
  // });

  //제품 썸네일에 마우스 오버됬을 때 뜨는 하트(찜하기)를 누르면 채워진 하트로 바뀐다.
  $(".choice_icon1 img").on("click", function () {
    // 현재 클릭한 span 내의 img 요소를 선택
    const img = $(this);

    // 이미지 소스를 변경
    if (img.attr("src") === "./img/icon/web_icons_svg/Heart-empty.svg") {
      img.attr("src", "./img/icon/web_icons/Heart-full.png");
    } else {
      img.attr("src", "./img/icon/web_icons_svg/Heart-empty.svg");
    }
  });
});
