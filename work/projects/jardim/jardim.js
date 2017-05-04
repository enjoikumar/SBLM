
$(document).ready(function(){

	(function(){

	var counter = 0, 
  $items = document.querySelectorAll('.slideshow figure'),
  numItems = $items.length; 

	var showCurrent = function(){

  var itemToShow = Math.abs(counter%numItems);  

  [].forEach.call( $items, function(el){
  	el.classList.remove('show');
  });
  
  $items[itemToShow].classList.add('show');
	};

	document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

	document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
	})();

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

  $down = $('.down')

  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history6").offset().top
    }, 500);
  }); 

  $up = $('.footer')
  $up.click(function() {
  $('html, body').animate({
      scrollTop: $(".slideshow").offset().top
  }, 400);
  });

  $fold = $('.fold');
  $expand = $('.expand');

  var count = 0;

  $expand.click(function(){
    count++;
    if(count%2){
      $fold.css("display", "block")
      $expand.html('&#x2501;')
      $fold.removeClass('away')
    } else{
      $expand.html('&#x254B;')
      $fold.addClass('away')
    }
  })
})







