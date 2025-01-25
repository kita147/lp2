/* globals $ */

////////// スライダーの設定 //////////
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", //必須
    prevEl: ".swiper-button-prev", //必須
  },
  pagination: {
    el: ".swiper-pagination", //必須
    type: "bullets",
  },
});

////////// アコーディオンの設定 //////////
$(document).ready(function () {
  $(".accordion-question").on("click", function () {
    const $answer = $(this).next(".accordion-answer");
    const $toggle = $(this).find(".accordion-toggle");

    // Close other answers
    $(".accordion-answer").not($answer).slideUp();
    $(".accordion-toggle").not($toggle).removeClass("active");

    // Toggle the clicked answer
    $answer.slideToggle();
    $toggle.toggleClass("active");
  });
});

////////// トグルボタンのクリック時に、画像を回転させる //////////
$(document).ready(function () {
  $(".accordion__question").on("click", function () {
    const $answer = $(this).next(".accordion__answer");
    const $toggle = $(this).find(".toggle-btn");

    // Close other answers
    $(".accordion__answer").not($answer).slideUp();
    $(".toggle-btn").not($toggle).removeClass("active");

    // Toggle the clicked answer
    $answer.slideToggle();
    $toggle.toggleClass("active");
  });
});
