'use strict';

/* 背景・文字色変更 */
const bgColor1 = document.querySelector('#base_color');
const blackBtn = document.querySelector('.black_btn');

blackBtn.addEventListener('click', function () {
  bgColor1.classList.remove('change_yellow');
  bgColor1.classList.toggle('change_black');

})


const bgColor2 = document.querySelector('#base_color');
const yellowBtn = document.querySelector('.yellow_btn');

yellowBtn.addEventListener('click', function () {
  bgColor1.classList.remove('change_black');
  bgColor2.classList.toggle('change_yellow');
})


/* スライドショー */
$('.slider').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnFocus: false,
  pauseOnHover: false,
});

$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay');
});



/* コンセプトアニメーション */
function fadeUpAnime() {

  $('.fadeUpTrigger').each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    }
  });
}
$(window).scroll(function () {
  fadeUpAnime();
});

$(window).on('load', function () {
  fadeUpAnime();
});




/* お知らせ */

const hidden = document.querySelectorAll('.hidden');
const plus = document.querySelectorAll('.plus');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    hidden[i].classList.toggle('open');
  });
};

$(function () {
  $('.plus').click(function () {
    $(this).next('span').slideToggle();
    $(this).find(".icon").toggleClass('open');
  });
});




