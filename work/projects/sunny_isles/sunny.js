


$(document).ready(function(){

  // //Declaring variables
  // var $current, $next, $slides = $(".slideshow2 .slide");

  // // basically making the slideshow
  // function doSlideShow () {
  //   $current = $slides.filter(".slide.current"); 
  //   $next = $current.next(".slide");
  //   if ($next.length < 1) {
  //     $next = $slides.first();
  //   }
  //   $slides.removeClass("previous");
  //   $current.addClass("previous").removeClass("current");
  //   $next.addClass("current");
  //   window.setTimeout(doSlideShow, 2000);
  // }
  // window.setTimeout(doSlideShow, 2000);

  //just another way of writing document.ready
  //but for some reason, need to have both
  //could be a conflict of libraries
	(function(){

  // to keep track of current slide
	var counter = 0, 

	// a collection of all of the slides, caching for performance
  $items = document.querySelectorAll('.slideshow figure'),

  // total number of slides
  numItems = $items.length; 

	// this function is what cycles the slides, showing the next or previous slide and hiding all the others
	var showCurrent = function(){

	// uses remainder (aka modulo) operator to get the actual index of the element to show
  var itemToShow = Math.abs(counter%numItems);  
  
  // remove .show from whichever element currently has it 
  [].forEach.call( $items, function(el){
  	el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
	};

	// add click event to next button, as well as adding 1 to the counter 
	document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

  // click event to prev button and subtracting 1 to the counter 
	document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
	})(); 
  

  $down = $('.down')

  $down.click(function() {
    $('html, body').animate({
        scrollTop: $(".history8").offset().top
    }, 500);
  });

  $up = $('.top')
  $up.click(function() {
  $('html, body').animate({
      scrollTop: $(".slideshow").offset().top
  }, 400);
  });


  $('.press').click(function(){
  $('html, body').animate({
      scrollTop: $(".empty").offset().top
    }, 800);
  })

  $('.history1 img').click(function(){
    $('html, body').animate({
      scrollTop: $('.history2 img').offset().top
    }, 800)
  })

  $('.history2 img').click(function(){
    $('html, body').animate({
      scrollTop: $('.footer').offset().top
    }, 800)
  })

})




