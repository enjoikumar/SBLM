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

$education.click(function(){
  $(".education").css("filter", "grayscale(0%)")
  $(".retail").css("filter", "grayscale(100%)")
  $(".mixed").css("filter", "grayscale(100%)")
  $(".health").css("filter", "grayscale(100%)")
  $(".civic").css("filter", "grayscale(100%)")
  $(".all").css("filter", "grayscale(100%)")
})

$retail.click(function(){
  $(".education").css("filter", "grayscale(100%)")
  $(".retail").css("filter", "grayscale(0%)")
  $(".mixed").css("filter", "grayscale(100%)")
  $(".health").css("filter", "grayscale(100%)")
  $(".civic").css("filter", "grayscale(100%)")
  $(".all").css("filter", "grayscale(100%)")
})

$mixed.click(function(){
  $(".education").css("filter", "grayscale(100%)")
  $(".retail").css("filter", "grayscale(100%)")
  $(".mixed").css("filter", "grayscale(0%)")
  $(".health").css("filter", "grayscale(100%)")
  $(".civic").css("filter", "grayscale(100%)")
  $(".all").css("filter", "grayscale(100%)")
})

$health.click(function(){
  $(".education").css("filter", "grayscale(100%)")
  $(".retail").css("filter", "grayscale(100%)")
  $(".mixed").css("filter", "grayscale(100%)")
  $(".health").css("filter", "grayscale(0%)")
  $(".civic").css("filter", "grayscale(100%)")
  $(".all").css("filter", "grayscale(100%)")
})

$civic.click(function(){
  $(".education").css("filter", "grayscale(100%)")
  $(".retail").css("filter", "grayscale(100%)")
  $(".mixed").css("filter", "grayscale(100%)")
  $(".health").css("filter", "grayscale(100%)")
  $(".civic").css("filter", "grayscale(0%)")
  $(".all").css("filter", "grayscale(100%)")
})

$all.click(function(){
  $(".education").css("filter", "grayscale(100%)")
  $(".retail").css("filter", "grayscale(100%)")
  $(".mixed").css("filter", "grayscale(100%)")
  $(".health").css("filter", "grayscale(100%)")
  $(".civic").css("filter", "grayscale(100%)")
})

});
