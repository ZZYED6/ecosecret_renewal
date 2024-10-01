$(document).ready(function () {
  const maxQuantity = 20; // 최대 수량

  // 각 상품 박스에 대해 이벤트 처리
  $(".product_detail_box").each(function () {
    let $productBox = $(this);
    let price = parseInt(
      $productBox
        .find(".item_price strong")
        .text()
        .replace(/[^0-9]/g, "")
    ); // 가격 가져오기
    let quantity = 0; // 현재 수량

    // 수량 증가 버튼 클릭 이벤트
    $productBox.find("#up_btn").on("click", function () {
      if (quantity < maxQuantity) {
        quantity++;
        updateQuantityAndCost();
      } else {
        alert("20개까지만 구매 가능합니다.");
      }
    });

    // 수량 감소 버튼 클릭 이벤트
    $productBox.find("#down_btn").on("click", function () {
      if (quantity > 0) {
        quantity--;
        updateQuantityAndCost();
      }
    });

    // 수량과 총 금액 업데이트 함수
    function updateQuantityAndCost() {
      $productBox.find(".count_num").text(quantity); // 수량 업데이트
      let totalCost = price * quantity; // 총 금액 계산
      $productBox.find("#total_cost").text(totalCost.toLocaleString()); // 총 금액 업데이트
    }
  });

  //제품 썸네일에 마우스 오버됬을 때 뜨는 하트(찜하기)를 누르면 채워진 하트로 바뀐다.
  $(".choice_icon1 img").on("click", function () {
    // 현재 클릭한 span 내의 img 요소를 선택
    const img = $(this);

    // 이미지 소스를 변경
    if (img.attr("src") === "../../img/icon/web_icons_svg/heart-empty_gr.svg") {
      img.attr("src", "../../img/icon/web_icons_svg/heart-full-24px.svg");
    } else {
      img.attr("src", "../../img/icon/web_icons_svg/heart-empty_gr.svg");
    }
  });
  //상세정보
  $.fn.extend({
    detailInfo: function () {
      let ts = $(this);

      // 페이지 로딩 시 첫번째 내용 외 나머지 내용 안보이게 숨기기
      $("li > div", ts).hide();
      $("li:first-child > div", ts).show();

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
            // $("li > div:visible", o).hide();
            // 현재 버튼의 div 열기
            $clickedButton.parent().next().show();

            // 모든 버튼의 이미지를 원래 상태로 복구
            // $("img", o).each(function () {
            //   let $img = $(this);
            //   $img.attr("src", $img.data("original-src")); // 원래 이미지로 변경
            // });

            // 클릭된 버튼의 이미지를 새로운 이미지로 변경
            $clickedImg.attr("src", newSrc); // 새로운 이미지로 변경
          } else {
            // 현재 버튼의 div 숨기기
            $clickedButton.parent().next().hide();

            // 모든 버튼의 이미지를 원래 상태로 복구
            // $("img", o).each(function () {
            //   let $img = $(this);
            //   $img.attr("src", $img.data("original-src")); // 원래 이미지로 변경
            // });
            $clickedImg.attr("src", originalSrc); // 원래 이미지로 변경
          }
        }
      });
    },
  });

  $(".detail_info").detailInfo();
});
