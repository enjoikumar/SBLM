
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
})

