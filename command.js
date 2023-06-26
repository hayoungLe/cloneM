console.clear();

$(".icon-box").click(function () {
  $(".top-popup").addClass("active");
});

$(
  ".list-1st__cart, .timeattack-list__cart, .MD-list__cart, .article-items__btn > a > button"
).click(function () {
  $(".cart_popup").addClass("active");
  $("html").addClass("scroll");
});

$(".cart_popup__delet-btn, .cart_popup ").click(function () {
  $(".cart_popup").removeClass("active");
  $("html").removeClass("scroll");
  $(".cart_popup__content").click(function () {
    return false;
  });
});


var jbOffset = $( '.header__nav-con' ).offset();
$( window ).scroll( function() {
if ( $( document ).scrollTop() > jbOffset.top ) {
$( '.header__nav-con' ).addClass( 'navFixed' );
}
else {
  $( '.header__nav-con' ).removeClass( 'navFixed' );
}
});




//베너 스와이퍼

const swiper_1 = new Swiper('.banner-1 > .swiper-box-1 > .swiper', {
  // Optional parameters
  autoplay: {
    delay:3000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".banner-1 > .swiper-box-1 > .swiper > .swiper-pagination ",
    clickable: true,
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.banner-1 > .swiper-box-1 > .swiper > .swiper-button-next',
    prevEl: '.banner-1 > .swiper-box-1 > .swiper > .swiper-button-prev',
  },
});


//리스트 스와이퍼
    const swiper_2 = new Swiper(".list-1st > .swiper-box-1 > .swiper", {
      navigation: {
        nextEl: ".list-1st > .swiper-box-1 > .swiper > .swiper-button-next",
        prevEl: ".list-1st > .swiper-box-1 > .swiper > .swiper-button-prev",
      },
    });