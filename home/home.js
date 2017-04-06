
//function enables an extra element to the nav bar
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//       x.className += " responsive";
//   } else {
//       x.className = "topnav";
//   }
// }

// var myNav = document.getElementById("myNav");

// var count = 0
// function clicker(){
// 	count++;
// 	if(count%2){
//   	myNav.style.height = "100%";
// 	} else{
//   	myNav.style.height = "0%";
// 	}
// }

$(document).ready(function(){

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

  

	$(document).ready(function(){
    $("li:contains(Ideas)").css("display", "none");
    $("a:contains(Ideas)").css("display", "none");
    $("li:contains(People)").css("display", "none");
    $("a:contains(People)").css("display", "none");
	});


	var edu = function(){
    $(".education").css("filter", "grayscale(0%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var ret = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(0%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var hea = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(0%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var mix = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(0%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var civ = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(0%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var clicker = 1;

  $slide1 = $("[id = slide1]");

  $slide2 = $("[id = slide2]");

  $slide3 = $("[id = slide3]");

  $slide4 = $("[id = slide4]");

  $slide5 = $("[id = slide5]");

  $slide6 = $("[id = slide6]");  

  $slide7 = $("[id = slide7]");

  $slide8 = $("[id = slide8]");

  $slide9 = $("[id = slide9]");

  $slide1.click(function(){
    clicker++
    console.log("clicked")
  })

  $slide1.click(function(){
  })

  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })
  
  $slide1.click(function(){
  })

})









