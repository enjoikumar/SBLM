

$(document).ready(function(){

	$york = $("[id = york]");

	$island = $("[id = island]");

	$dallas = $("[id = dallas]");

	$miami = $("[id = miami]");

	$ireland = $("[id = ireland]");

	$all = $("[id = all]");

	$york.click(function(){
		console.log("clicked new york")
		$(".york").css("filter", "grayscale(0%)")
		$(".island").css("filter", "grayscale(100%)")
		$(".dallas").css("filter", "grayscale(100%)")
		$(".miami").css("filter", "grayscale(100%)")
		$(".ireland").css("filter", "grayscale(100%)")
		$(".all").css("filter", "grayscale(100%)")
	})

	$island.click(function(){
		console.log("clicked long island")
		$(".york").css("filter", "grayscale(100%)")
		$(".island").css("filter", "grayscale(0%)")
		$(".dallas").css("filter", "grayscale(100%)")
		$(".miami").css("filter", "grayscale(100%)")
		$(".ireland").css("filter", "grayscale(100%)")
		$(".all").css("filter", "grayscale(100%)")
	})

	$dallas.click(function(){
		console.log("clicked dallas")
		$(".york").css("filter", "grayscale(100%)")
		$(".island").css("filter", "grayscale(100%)")
		$(".dallas").css("filter", "grayscale(0%)")
		$(".miami").css("filter", "grayscale(100%)")
		$(".ireland").css("filter", "grayscale(100%)")
		$(".all").css("filter", "grayscale(100%)")
	})

	$miami.click(function(){
		console.log("clicked miami")
		$(".york").css("filter", "grayscale(100%)")
		$(".island").css("filter", "grayscale(100%)")
		$(".dallas").css("filter", "grayscale(100%)")
		$(".miami").css("filter", "grayscale(0%)")
		$(".ireland").css("filter", "grayscale(100%)")
		$(".all").css("filter", "grayscale(100%)")
	})

	$ireland.click(function(){
		console.log("clicked ireland")
		$(".york").css("filter", "grayscale(100%)")
		$(".island").css("filter", "grayscale(100%)")
		$(".dallas").css("filter", "grayscale(100%)")
		$(".miami").css("filter", "grayscale(100%)")
		$(".ireland").css("filter", "grayscale(0%)")
		$(".all").css("filter", "grayscale(100%)")
	})

	var count = 1
	$all.click(function(){
		count++;
		if(count%2){
			$(".york").css("filter", "grayscale(100%)")
			$(".island").css("filter", "grayscale(100%)")
			$(".dallas").css("filter", "grayscale(100%)")
			$(".miami").css("filter", "grayscale(100%)")
			$(".ireland").css("filter", "grayscale(100%)")
			$(".all").css("filter", "grayscale(100%)")
		} else{
			$(".york").css("filter", "grayscale(0%)")
			$(".island").css("filter", "grayscale(0%)")
			$(".dallas").css("filter", "grayscale(0%)")
			$(".miami").css("filter", "grayscale(0%)")
			$(".ireland").css("filter", "grayscale(0%)")
			$(".all").css("filter", "grayscale(0%)")
		}
	})

	$myNav = $("[id = myNav]")

	$burger = $('span.burger')

	var count = 0

	$burger.click(function(){
		count++;
		if(count%2){
			$myNav.css("height", "100%")
			$burger.html('&#9747;')
		} else{
			$myNav.css("height", "0%")
			$burger.html('&#9776;')
		}
	})
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
})












