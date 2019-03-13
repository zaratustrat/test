$('.slider-common').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  nextArrow: '<div class="arrow arrow_right"></div>',
  prevArrow: '<div class="arrow arrow_left"></div>',
  responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
// этот скрипт срабатывает при разрешении выше 992ръ
/* $(document).ready(function () {
  $('.menu1').hover(
    function () {
      $(this).find('.header-dropdown').toggleClass('visible');
    }
  );
  $('.menu2').hover(
    function () {
      $(this).find('.header-dropdown2').toggleClass('visible');
    }
  );
});
 */



$(window).resize(function () {
  if ($(window).width() < 992) {
    $('.menu1').click(
      function () {
        $(this).find('.header-dropdown').toggleClass('visible');
      }
    );
    $('.menu2').click(
      function () {
        $(this).find('.header-dropdown2').toggleClass('visible');
      }
    );
    $('.menu').click(
      function () {
        $(this).find('.sentence-dropdown').toggleClass('visible');
      }
    );
  }
});
   
$(document).ready(function () {
  $(".phone").mask("+380 (999) 99-99-999");
}); 

