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

  $down = $('.down')

  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history1").offset().top
    }, 500);
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

