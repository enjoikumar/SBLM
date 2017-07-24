
$(document).ready(function(){
 
  $down = $('.slideshow')


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
})







