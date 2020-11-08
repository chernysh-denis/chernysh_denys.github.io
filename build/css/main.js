$(function(){
  $('.nominations__close').on('click', function(){
    $('.nominations__content').slideToggle();
  });

  // $('.nominations__closed').on('click', function(){
  //   $('.nominations__content').slideToggle();
  // });

  var mixer = mixitup('.juri__foto');
});