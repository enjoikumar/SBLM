
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


$(document).ready(function(){
	// var elements = $(".slide");
	// var elementsInnerHtmls = [];
	// var numberOfElements = elements.length;

	// for( var i = 0 ; i < numberOfElements ; i++){
	// 	elementsInnerHtmls.push(elements[i].innerHTML); 
	// }

	// var checkedIndexes = [];
	// for( var i = 0 ; i < numberOfElements ; i++){
	//   var randomIndex = Math.floor(Math.random()*10) % numberOfElements;
	//   while(checkedIndexes[randomIndex] != undefined){
	//       randomIndex = Math.floor(Math.random()*10) % numberOfElements;    
	//   }
	//   checkedIndexes[randomIndex] = true;
	//   elements[i].innerHTML = elementsInnerHtmls[randomIndex];    
	// }
})




