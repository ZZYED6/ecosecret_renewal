$(document).ready(function () {
  // 메인비주얼
  $("#main_visual_slide").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // 이벤트 배너
  $("#event_banner_slider").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow"),
  });
});
