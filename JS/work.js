console.log("you're in the work page");

$(document).ready(function(){

// testing
// $("[id = education").css("background-color","yellow");

$education = $("[id = education");
// console.log("just turned education yellow")
$education.css("background-color", "yellow")

$retail = $("[id = retail");
$retail.css("background-color", "red")

$mixed = $("[id = mixed");
$mixed.css("background-color", "green")

$health = $("[id = health");
$health.css("background-color", "blue")

$civic = $("[id = civic");
$civic.css("background-color", "papayawhip")

$all = $("[id = all");
$all.css("background-color", "black")
});
