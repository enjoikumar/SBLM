$(document).ready(function(){

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  masonry: {
	    columnWidth: 100
	  }
	});

	// $(".grid").append
	// ($('<div id="div1"> <img id="myImg" class="grid-item grid-item--width2" src="https://drscdn.500px.org/photo/99282877/q%3D80_h%3D300/562f82a22fda0b74f545b53e36673d17"></div>'))
	// $(".grid").append($('<div id="div2"><img id="myImg2" class="grid-item grid-item--height2" src="https://drscdn.500px.org/photo/98121159/q%3D80_m%3D1000/7db68a1e085dc492079530dc3cfe00c2"></div>'))

	//gettting elements by id's
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


	var chain = 
	[
	document.getElementById("div1"),
	document.getElementById("div2"),
	document.getElementById("div3"),
	document.getElementById("div4"),
	document.getElementById("div5"),
	document.getElementById("div6"),
	document.getElementById("div7"),
	document.getElementById("div8"),
	document.getElementById("div9")
	];
	// console.log(chain)

	var wrapper = document.getElementById("grid");

	// function shuffle(array) {
	// var currentIndex = array.length, temporaryValue, randomIndex;
	// 	while (0 !== currentIndex) {
	// 	randomIndex = Math.floor(Math.random() * currentIndex);
	// 	currentIndex -= 1;

	// 	temporaryValue = array[currentIndex];
	// 	array[currentIndex] = array[randomIndex];
	// 	array[randomIndex] = temporaryValue;
	// 	}
	// 	return array
	// }
	// chain = shuffle(chain);
	// console.log(chain)


	// chain.sort(function(a,b){
	// 	return 0.5 - Math.random()
	// })

	// function func1() {
 //  console.log("This is the first.");
	// }
	// window.onpageload=func1;

	function shuffle(array){
		var copy = [], n = array.length, i;
		//while there remain elements to shuffle
		while (n) {
			//pick a remaining element
			i = Math.floor(Math.random() * n--);
			//and move it to the new array
			copy.push(array.splice(i,1)[0]);
		}
		return  copy
	}

	// chain = shuffle(chain)
	// console.log(chain)


	var modalImg = document.getElementById("img01")

	img1.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		chain = shuffle(chain)
		chain.push( chain.shift());
		// console.log("chain got pushed")
		for (var i=0, len = chain.length; i < len; i++){
			// console.log("chain got shuffled")
			var el = chain[i];
			wrapper.removeChild(el);
			// console.log("trying to remove child")
			wrapper.appendChild(el)
			console.log("child appended")
		}
		console.log(chain)
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
// var arr1 = ["dog", "cat", "panda", "tiger","lion"]
// arr1.sort(function(a,b){
// 	return 0.5 - Math.random()
// });
// console.log(arr1)

// var arr1 = ["dog", "cat", "panda", "tiger","lion"]
// arr1.sort(function(a,b){
// 	return 0.1 - Math.random()
// });
// console.log(arr1)



// function shuffle(array) {
// 	var currentIndex = array.length, temporaryValue, randomIndex;
// 	while (0 !== currentIndex) {
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}
// 	return array
// }

// arr1 = shuffle(arr1)
// console.log(arr1)
// chain = shuffle(chain)
// console.log(chain)

// function shuffle(array){
// 	var copy = [], n = array.length, i;
// 	//while there remain elements to shuffle
// 	while (n) {
// 		//pick a remaining element
// 		i = Math.floor(Math.random() * n--);
// 		//and move it to the new array
// 		copy.push(array.splice(i,1)[0]);
// 	}
// 	return  copy
// }

// var arr1 = ["dog", "cat", "panda", "tiger","lion"];

// arr1 = shuffle(arr1)
// console.log(arr1)













