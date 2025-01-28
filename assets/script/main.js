/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
  loop: true,

  // スライド数の設定
  slidesPerView: 1,
  spaceBetween: 10,

  // ブレークポイントの設定とPC版のスライド数の設
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // ナビゲーションボタンの設定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // ページネーションの設定
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
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
  const $footer = $(".footer");
  const defaultBottom = 20;

  // スクロール位置で表示制御とフッター調整
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const footerTop = $footer.offset().top;
    const windowHeight = $(window).height();

    // ボタンの表示と非表示
    if (scrollTop > 200) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }

    // フッターに近づいた場合の位置調整
    const overlap = scrollTop + windowHeight - footerTop;
    if (overlap > 0) {
      $backToTop.css({ bottom: overlap + "px" });
    } else {
      $backToTop.css({ bottom: defaultBottom + "px" });
    }
  });

  // ボタンをクリックしてトップに戻る
  $backToTop.on("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
