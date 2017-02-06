
//Declaring variables
var $current, $next, $slides = $(".slideshow .slide");

// basically making the slideshow
function doSlideShow () {
  $current = $slides.filter(".slide.current"); 
  $next = $current.next(".slide");
  if ($next.length < 1) {
    $next = $slides.first();
  }
  $slides.removeClass("previous");
  $current.addClass("previous").removeClass("current");
  $next.addClass("current");
  window.setTimeout(doSlideShow, 4000);
}
window.setTimeout(doSlideShow, 4000);

