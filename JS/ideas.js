$(document).ready(function(){

$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 100
  }
});
// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

	var modal = document.getElementById("myModal");

	var img1 = document.getElementById("myImg");
	var img2 = document.getElementById("myImg2");
	var img3 = document.getElementById("myImg3");
	var img4 = document.getElementById("myImg4");
	var img5 = document.getElementById("myImg5");
	var img6 = document.getElementById("myImg6");
	var img7 = document.getElementById("myImg7");
	var img8 = document.getElementById("myImg8");
	var img9 = document.getElementById("myImg9");

	function func1() {
  console.log("This is the first.");
	}
	window.onpageload=func1;


	var modalImg = document.getElementById("img01")

	img1.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		func1();
	}

	img2.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img3.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img4.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img5.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img6.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img7.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

		img8.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

	img9.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function(){
		modal.style.display = "none";
	}




 // window.onpageload=func1;





})

// random function
var arr1 = ["dog", "cat", "panda", "tiger","lion"]
arr1.sort(function(a,b){
	return 0.5 - Math.random()
});
console.log(arr1)





