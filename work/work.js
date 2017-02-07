
$(document).ready(function(){

  // testing
  // $("[id = education").css("background-color","yellow");
  // calling the id education on a global level
  // so functions are easier to write
  $education = $("[id = education");

  $retail = $("[id = retail");

  $mixed = $("[id = mixed");

  $health = $("[id = health");

  $civic = $("[id = civic");

  $all = $("[id = all");

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

    // $all.click(function(){
  //   $(".education").css("filter", "grayscale(100%)")
  //   $(".retail").css("filter", "grayscale(100%)")
  //   $(".mixed").css("filter", "grayscale(100%)")
  //   $(".health").css("filter", "grayscale(100%)")
  //   $(".civic").css("filter", "grayscale(100%)")
  // });

  // $education.click(function(){
  //   if($(".education").css("filter", "grayscale(100%)")){
  //     $(".education").css("filter", "grayscale(0%)")
  //   }else($(".project").css("filter", "grayscale(0%)"))
  // })

  // $retail.click(function(){
  //   if($(".retail").css("filter", "grayscale(100%)")){
  //     $(".retail").css("filter", "grayscale(0%)")
  //   }else($(".project").css("filter", "grayscale(0%)"))
  // })

  // $health.click(function(){
  //   if($(".health").css("filter", "grayscale(100%)")){
  //     $(".health").css("filter", "grayscale(0%)")
  //   }else($(".project").css("filter", "grayscale(0%)")) 
  // })

  // $civic.click(function(){
  //   if($(".civic").css("filter", "grayscale(100%)")){
  //     $(".civic").css("filter", "grayscale(0%)")
  //   }else($(".project").css("filter", "grayscale(0%)"))
  // })
  // $mixed.click(function(){
  //   if($(".mixed").css("filter", "grayscale(100%)")){
  //     $(".mixed").css("filter", "grayscale(0%)")
  //   }else($(".project").css("filter", "grayscale(0%)"))
  // })
});
