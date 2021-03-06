$(document).ready(function(){
  var $item = $('.carousel .item');
  var $wHeight = $(window).height();



  //the height of each slide becomes the height of the screen
  //ie the images are now full screen
  $item.height($wHeight); 
  $item.addClass('full-screen');

  //number of slides become the amount of items that have the class item
  var $numberofSlides = $('.item').length;
  var $currentSlide = Math.floor((Math.random() * $numberofSlides));
  //randomizes the current slide.

  //Bootstrap version of clicking on the circle to direct to associated slide
  $('.carousel-indicators li').each(function(){
    var $slideValue = $(this).attr('data-slide-to');
    if($currentSlide == $slideValue) {
      $(this).addClass('active');
      $item.eq($slideValue).addClass('active');
    } else {
      $(this).removeClass('active');
      $item.eq($slideValue).removeClass('active');
    }
  });

  //This makes sure the image fits the screen, and adding a background color
  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  //each image will stay for 4 seconds
  $('.carousel').carousel({
    interval: 4000,
    pause: "false"
  });

  //if the window resizes, the image will still have the height
  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });
})






