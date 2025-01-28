/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
  loop: true,

  // Default parameters SP版の時
  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints PC版の時
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

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
    const $toggle = $(this).find(".accordion__toggle-btn");

    // Close other answers
    $(".accordion__answer").not($answer).slideUp();
    $(".accordion__toggle-btn").not($toggle).removeClass("active");

    // Toggle the clicked answer
    $answer.slideToggle();
    $toggle.toggleClass("active");
  });
});

////////// ページトップに戻るボタン //////////
$(document).ready(function () {
  const $backToTop = $(".btn__back-to-top");

  // スクロール位置で表示制御
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      // 200pxスクロールしたら
      $backToTop.addClass("show"); // 表示
    } else {
      $backToTop.removeClass("show"); // 非表示
    }
  });

  // ボタンをクリックしてトップに戻る
  $backToTop.on("click", function () {
    // デフォルトのリンク動作を維持し、CSSの scroll-behavior を利用
    window.scrollTo({ top: 0, behavior: "smooth" }); // 明示的にスクロールする
  });
});
