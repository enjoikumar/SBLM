
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

	var count = 0;

	$('.burger').click(function(){
		count ++;
		if(count%2){
			$myNav.css('height','100%');
		} else{
			$myNav.css('height','0%');
		}
	})

	$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  //each image will stay for 4 seconds
  $('.carousel').carousel({
    interval: 4000,
    pause: "false"
  });

  //if the window resizes, the image will still have the height
  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });
})









