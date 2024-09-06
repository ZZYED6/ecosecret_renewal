$(document).ready(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });

  // 초기 설정: 단계별 카테고리 보여짐
  $(".title_box_1").addClass("active");
  $(".type_btn_list_1").show();
  $(".type_btn_list_2").hide();
  // 초기 설정: 단계별의 리스트가 선택된 상태로 시작
  $(".t_btn_1").addClass("active");
  $(".t_list_1").show();
  $(".prd_list li").not(".t_list_1").hide(); // 첫번째 외에는 숨김

  // 버튼 클릭 이벤트
  $(".con_title li").on("click", function (e) {
    e.preventDefault(); // 기본 동작 막기

    let index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

    // 모든 버튼에서 active 클래스 제거
    $(".con_title li").removeClass("active");

    // 클릭한 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 카테고리 숨기기
    $(".type_btn_group ul").hide();

    // 클릭한 버튼에 해당하는 카테고리 내용만 표시
    $(".type_btn_list_" + index).show();
  });

  // 타입별 버튼 클릭 이벤트
  $(".type_btn_list_1 > li").on("click", function (e) {
    e.preventDefault(); // 기본 동작 막기

    let index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

    // 모든 버튼에서 active 클래스 제거
    $(".type_btn_list_1 li").removeClass("active");

    // 클릭한 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 리스트 숨기기
    $(".step_list li").hide();
    $(".concern_list li").hide();

    // 클릭한 버튼에 해당하는 리스트만 표시
    $(".step_list > .t_list_" + index).show();
  });

  // 피부고민별 버튼 클릭 이벤트
  $(".type_btn_list_2 > li").on("click", function (e) {
    e.preventDefault(); // 기본 동작 막기

    let index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

    // 모든 버튼에서 active 클래스 제거
    $(".type_btn_list_2 li").removeClass("active");

    // 클릭한 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 리스트 숨기기
    $(".concern_list li").hide();
    $(".step_list li").hide();

    // 클릭한 버튼에 해당하는 리스트만 표시
    $(".concern_list .t_list_" + index).show();
  });
});
