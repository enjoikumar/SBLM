
$(document).ready(function(){
 
  $down = $('.slideshow')


  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 500);
  });


  $history = $('.history2');
  $expand = $('.expand');

  var count = 0;

  //user clicks on plus it turns to minus
  //it also
  $expand.click(function(){
    count++;
    if(count%2){
      $history.css("display", "block")
      $expand.html('&#x2501;')
      $('html, body').animate({
        scrollTop: $history.offset().top
    }, 500);
    } else{
      $history.css("display", "none")
      $expand.html('&#x254B;')
      $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 400);
    }
  })
})







