$(function(){
  $('.nominations__close').on('click', function(){
    $(this).next($('.nominations__content')).slideToggle();
  });

  $('.header__burger').on('click', function(){
    $('.header__menu').slideToggle();
  });

  $('.header__btn--btn1').hover(function(){
    $('.header__image-03').toggleClass('active-image');
  });

  $('.header__btn--btn2').hover(function(){
    $('.header__image-04').toggleClass('active-image');
  });

  var mixer = mixitup('.juri__foto');
});