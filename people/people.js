

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
})










