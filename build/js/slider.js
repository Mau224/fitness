'use strict';

$('.trainers__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        adaptiveHeight: true,
        variableWidth: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true,
        variableWidth: false,
        slidesToScroll: 1
      }
    }
  ]
});

$('.reviews__container').slick({
  speed: 300
});
