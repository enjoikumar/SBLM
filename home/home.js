
//function enables an extra element to the nav bar
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//       x.className += " responsive";
//   } else {
//       x.className = "topnav";
//   }
// }


var myNav = document.getElementById("myNav");

var count = 0
function clicker(){
	count++;
	if(count%2){
  	myNav.style.height = "100%";
	} else{
  	myNav.style.height = "0%";
	}
}



