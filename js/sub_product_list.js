$(document).ready(function () {
  // Floating 버튼
  $("#floating_btn_wrap").on("click", function (event) {
    event.preventDefault();

    $("html").animate({ scrollTop: 0 }, 500);
  });

  // 섹션_타입별 선택
  // 초기 설정: 첫 번째 버튼과 리스트가 선택된 상태로 시작
  $(".t_btn_1").addClass("active");
  $(".t_list_1").show();
  $(".prd_list li").not(".t_list_1").hide(); // 첫번째 외에는 숨김

  // 버튼 클릭 이벤트
  $(".type_btn_list li").on("click", function (e) {
    e.preventDefault(); // 기본 동작 막기

    var index = $(this).index() + 1; // 버튼의 인덱스 값 + 1

    // 모든 버튼에서 active 클래스 제거
    $(".type_btn_list li").removeClass("active");

    // 클릭한 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 모든 리스트 숨기기
    $(".prd_list li").hide();

    // 클릭한 버튼에 해당하는 리스트만 표시
    $(".t_list_" + index).show();
  });
});
