
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



  $.edu = function(){
    $(".education").css("filter", "grayscale(0%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  $.ret = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(0%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  $.hea = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(0%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  $.mix = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(0%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  $.civ = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(0%)")
    $(".all").css("filter", "grayscale(100%)")
  }



  //RANDOMIZE THE DIVS
  //=============================
  // var elements = $(".first");
  // var elementsInnerHtmls = [];
  // var numberOfElements = elements.length;

  // for( var i = 0 ; i < numberOfElements ; i++){
  //   elementsInnerHtmls.push(elements[i].innerHTML); 
  // }

  // var checkedIndexes = [];
  // for( var i = 0 ; i < numberOfElements ; i++){
  //   var randomIndex = Math.floor(Math.random()*10) % numberOfElements;
  //   while(checkedIndexes[randomIndex] != undefined){
  //       randomIndex = Math.floor(Math.random()*10) % numberOfElements;    
  //   }
  //   checkedIndexes[randomIndex] = true;
  //   elements[i].innerHTML = elementsInnerHtmls[randomIndex];    
  // }
});
