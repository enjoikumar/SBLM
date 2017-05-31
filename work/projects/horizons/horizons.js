
$(document).ready(function(){

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');  

  $up = $('.top')
  $up.click(function() {
  $('html, body').animate({
      scrollTop: $(".slideshow").offset().top
  }, 400);
  });
})

  // var raq = function(){
  //   alert('Sorry I couldnt put your photo in')
  // }

  // window.onkeydown = function (e) {
  //   var code = e.keyCode ? e.keyCode : e.which;
  //   if (code === 90) { //up key
  //       alert('sorry nothing to see here');
  //   } else if (code === 89) { //down key
  //       alert('stop it');
  //   }
  // };



