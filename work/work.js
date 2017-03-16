
$(document).ready(function(){

  $education = $("[id = education]");

  $retail = $("[id = retail]");

  $mixed = $("[id = mixed]");

  $health = $("[id = health]");

  $civic = $("[id = civic]");

  $all = $("[id = all]");

  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white
  $education.click(function(){
    $(".education").css("filter", "grayscale(0%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $retail.click(function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(0%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $mixed.click(function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(0%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $health.click(function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(0%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $civic.click(function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(0%)")
    $(".all").css("filter", "grayscale(100%)")
  });

    var count = 1
  $all.click(function(){
    count++;
    if(count%2){
      $(".education").css("filter", "grayscale(100%)")
      $(".retail").css("filter", "grayscale(100%)")
      $(".mixed").css("filter", "grayscale(100%)")
      $(".health").css("filter", "grayscale(100%)")
      $(".civic").css("filter", "grayscale(100%)")
    } else{
      $(".education").css("filter", "grayscale(0%)")
      $(".retail").css("filter", "grayscale(0%)")
      $(".mixed").css("filter", "grayscale(0%)")
      $(".health").css("filter", "grayscale(0%)")
      $(".civic").css("filter", "grayscale(0%)")
    }
  })
});
