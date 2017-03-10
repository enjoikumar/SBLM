
$(document).ready(function(){

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  masonry: {
	    columnWidth: 100
	  }
	});
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




