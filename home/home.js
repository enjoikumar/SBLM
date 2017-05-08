
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




  var civ = 0;
  var edu = 0;
  var hea = 0;
  var mix = 0;
  var ret = 0;


  $slide1 = $("[id = slide1]");

  $slide2 = $("[id = slide2]");

  $slide3 = $("[id = slide3]");

  $slide4 = $("[id = slide4]");

  $slide5 = $("[id = slide5]");


  $slide1.click(function(){
    civ = 1
    edu = 0
    hea = 0
    mix = 0
    ret = 0
    console.log(civ)
  })

  $slide2.click(function(){
    civ = 0
    edu = 1
    hea = 0
    mix = 0
    ret = 0
    console.log(edu)
  })

  $slide3.click(function(){
    civ = 0
    edu = 0
    hea = 1
    mix = 0
    ret = 0
    console.log(hea)
  })
  
  $slide4.click(function(){
    civ = 0
    edu = 0
    hea = 0
    mix = 1
    ret = 0
    console.log(mix)
  })
  
  $slide5.click(function(){
    civ = 0
    edu = 0
    hea = 0
    mix = 0
    ret = 1
    console.log(ret)
  })
})









