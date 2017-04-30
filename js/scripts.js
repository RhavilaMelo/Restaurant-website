$(document).ready(function(){

  //hamburguer menu toggle
  $('.nav-toggle').click(function(){
    $('.main-nav').toggleClass('is-open');
    $('.hamburguer').toggleClass('is-open');
  });

});


$('.usmain a[href^="#"]').click(function(e){
  $('.main-nav').toggleClass('is-open');
  $('.hamburguer').toggleClass('is-open');
});

//Smooth scroll

$('.usmain a[href^="#"]').click(function(e){

  if ($(window).width() > 725){ // if the screen is bigger than 725 it'll do do this code snippet
      e.preventDefault();
        var id = $(this).attr('href'),
            menuHeight = $('.usmain').innerHeight(),
            targetOffset = $(id).offset().top;
      $('html, body').animate({
        scrollTop: targetOffset - menuHeight
      }, 500);
  }
});
