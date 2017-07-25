$(document).ready(function(){
  $down = $('.down')

  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".fold").offset().top
    }, 500);
  });

  $up = $('.top')
  $up.click(function() {
  $('html, body').animate({
      scrollTop: $(".slideshow").offset().top
  }, 400);
  });

  $('.press').click(function(){
    $('html, body').animate({
      scrollTop: $(".empty").offset().top
    }, 800);
  })

  $('.history1 img').click(function(){
    $('html, body').animate({
      scrollTop: $('.history2 img').offset().top
    }, 800)
  })

  $('.history2 img').click(function(){
    $('html, body').animate({
      scrollTop: $('.history3 img').offset().top
    }, 800)
  })

  $('.history3 img').click(function(){
    $('html, body').animate({
      scrollTop: $('.history4 img').offset().top
    }, 800)
  })
  
  if($(window).width() <= 800){
    $('.animation-element').removeClass('animation-element')
  };
})






