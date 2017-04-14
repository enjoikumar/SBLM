
$(document).ready(function(){
 
  $down = $('.slideshow')


  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 500);
  });

  $fold = $('.fold');
  $expand = $('.expand');

  var count = 0;

  //user clicks on plus it turns to minus
  //it also
  $expand.click(function(){
    count++;
    if(count%2){
      $fold.css("display", "block")
      $expand.html('&#x2501;')
    } else{
      $fold.css("display", "none")
      $expand.html('&#x254B;')
    }
  })

  
})







