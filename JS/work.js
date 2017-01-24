console.log("you're in the work page");

$(document).ready(function(){

// testing
// $("[id = education").css("background-color","yellow");

$education = $("[id = education");

$retail = $("[id = retail");

$mixed = $("[id = mixed");

$health = $("[id = health");

$civic = $("[id = civic");

$all = $("[id = all");

// $civic= $(".civic-color");
$civic = $("[id = civic")

// $education.click(function () {
//   $education.css("background-color", "yellow");
// })

$civic.click(function(){
  $(".civic-color").css("filter", "grayscale(0%)");
})


});
