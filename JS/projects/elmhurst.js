// console.log("project page")
$(document).ready(function(){

	//keep track of current slide
	var counter = 0

	//a collection of all the slides, caching for performance
	$items = document.querySelectorAll('.diy-slideshow figure'),

	//total number of slides
	numItems = $items.length;

	//this function is what cycles the slides,
	//showing the next or previous slide and hiding all the others
	var showCurrent = function(){

		//uses modula operator to get the actual index of the element to show
		var itemToShow = Math.abs(counter%numItems);

		//remove .show from whichever element currently has it
		[].forEach.call($items, function(el){
			el.classList.remove('show');
		});

		//add .show to the one item that's supposed to have it
		$item[itemToShow].classList.add('show');
	};

	//add click events to the previous and next buttons
	document.querySelector('.next').addEventListener('click', function(){
		counter++;
		showCurrent();
	}, false);

	document.querySelector('.prev').addEventListener('click', function(){
		counter--;
		showCurrent();
	}, false);

})