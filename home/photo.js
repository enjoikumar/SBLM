$(document).ready(function(){
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
	  window.setTimeout(doSlideShow, 3000);
	  // $('ul li').removeClass('active');
	  // $('ul li').addClass('show');
	  // $('ul li:eq(' + index + ')').addClass('active');
	  // index = index < maxindex - 1 ? index + 0 : 0;
	}
		window.setTimeout(doSlideShow, 3000);


	var elements = $(".slide");
	var elementsInnerHtmls = [];
	var numberOfElements = elements.length;

	for( var i = 0 ; i < numberOfElements ; i++){
		elementsInnerHtmls.push(elements[i].innerHTML); 
	}

	var checkedIndexes = [];
	for( var i = 0 ; i < numberOfElements ; i++){
	  var randomIndex = Math.floor(Math.random()*10) % numberOfElements;
	  while(checkedIndexes[randomIndex] != undefined){
	      randomIndex = Math.floor(Math.random()*10) % numberOfElements;    
	  }
	  checkedIndexes[randomIndex] = true;
	  elements[i].innerHTML = elementsInnerHtmls[randomIndex];
	}
	// var index = 0
	// var maxindex = 6
	// console.log(maxindex)
	console.log(elementsInnerHtmls.length)


// for (var i = 0; i < maxindex; i++) {
//     $('ul').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
// }
})




