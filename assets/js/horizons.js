
$(document).ready(function(){ 

  $down = $('.slideshow')


  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 500);
  });

  $up = $('.top')
  $up.click(function() {
  $('html, body').animate({
      scrollTop: $(".slideshow").offset().top
  }, 400);
  });
})

  var raq = function(){
    alert('Sorry I couldnt put your photo in')
  }

  window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 90) { //up key
        alert('Sorry I couldnt put your photo on the site raquel');
    } else if (code === 89) { //down key
        alert("stop it, now you're just pressing random keys");
    }
  };


