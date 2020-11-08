$(function(){
  $('.nominations__close').on('click', function(){
    $('.nominations__content').slideToggle();
  });

  $('.header__burger').on('click', function(){
    $('.header__menu').slideToggle();
  });

  // $('.nominations__closed').on('click', function(){
  //   $('.nominations__content').slideToggle();
  // });

  var mixer = mixitup('.juri__foto');
});