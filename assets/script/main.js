/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
    loop: false,

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
    $(".accordion__question").on("click", function () {
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

////////// トップに戻るボタンのスクロール位置が200pxを超えたらフェードインする //////////
$(document).ready(function () {
    const $backToTop = $(".btn__back-to-top");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $backToTop.addClass("show");
        } else {
            $backToTop.removeClass("show");
        }
    });
});
