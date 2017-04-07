


$(document).ready(function(){
 
   $down = $('.down')

  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 500);
  });
})







