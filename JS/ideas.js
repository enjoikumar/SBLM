$(document).ready(function(){

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  masonry: {
	    columnWidth: 100
	  }
	});

	
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


	var wrapper = document.getElementById("grid");
	var captionText = document.getElementById("caption");

	var modalImg = document.getElementById("img01")

	//on click, array would shuffle elements and then
	//display them on the html
	img1.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	//when clicked on image, it would pop up 
	//
	img2.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img3.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img4.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img5.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img6.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img7.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

		img8.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	img9.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function(){
		modal.style.display = "none";
	}
})




// ---------CODE TO USE FOR LATER---------

//test functions for shuffling array
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

// img1.onclick = function(){
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// 	captionText.innerHTML = this.alt;
// 	chain = shuffle(chain)
// 	chain.push( chain.shift());
// 	// console.log("chain got pushed")
// 	for (var i=0, len = chain.length; i < len; i++){
// 		// console.log("chain got shuffled")
// 		var el = chain[i];
// 		wrapper.removeChild(el);
// 		// console.log("trying to remove child")
// 		wrapper.appendChild(el)
// 		console.log("child appended")
// 	}
// 	console.log(chain)
// }




//pushing elements into an array to shuffle later
// var chain = 
// [
// document.getElementById("div1"),
// document.getElementById("div2"),
// document.getElementById("div3"),
// document.getElementById("div4"),
// document.getElementById("div5"),
// document.getElementById("div6"),
// document.getElementById("div7"),
// document.getElementById("div8"),
// document.getElementById("div9")
// ];
// console.log(chain)



//shuffle function version 1
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

//shuffle function version 2
//both work, v2 just has less lines of code
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

//invoking the function and then displaying it on the console
// chain = shuffle(chain)
// console.log(chain)




