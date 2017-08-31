
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

	var $x = $('#myFunction')
	if ($x.className === 'topnav'){
			x.className += 'responsive';
	} else{
		$x.className = 'topnav';
	}

	var $myNav = $('#myNav');
				// $('html').empty()
	var count = 0;

	$('.burger').click(function(){
		count ++;
		if(count%2){
			$myNav.css('height','100%');
			$('.carousel-indicators').css('display', 'none');
		} else{
			$myNav.css('height','0%');
			$('.carousel-indicators').css('display', 'block');
		}
	})
})









