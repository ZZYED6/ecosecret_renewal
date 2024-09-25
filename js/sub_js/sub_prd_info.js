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
    if (img.attr("src") === "../../img/icon/web_icons_svg/Heart-empty_gr.svg") {
      img.attr("src", "../../img/icon/web_icons/Heart-full-24px.png");
    } else {
      img.attr("src", "../../img/icon/web_icons_svg/Heart-empty_gr.svg");
    }
  });
});
