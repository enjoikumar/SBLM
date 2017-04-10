
$(document).ready(function(){


  // if(civ = 1){
  //   $(".education").css("filter", "grayscale(100%)")
  //   $(".retail").css("filter", "grayscale(100%)")
  //   $(".mixed").css("filter", "grayscale(100%)")
  //   $(".health").css("filter", "grayscale(100%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  //   $(".all").css("filter", "grayscale(100%)")
  // }else{
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  // }

  // if(edu = 1){
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(100%)")
  //   $(".mixed").css("filter", "grayscale(100%)")
  //   $(".health").css("filter", "grayscale(100%)")
  //   $(".civic").css("filter", "grayscale(100%)")
  //   $(".all").css("filter", "grayscale(100%)")
  // }else{
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  // }

  // if(hea = 1){
  //   $(".education").css("filter", "grayscale(100%)")
  //   $(".retail").css("filter", "grayscale(100%)")
  //   $(".mixed").css("filter", "grayscale(100%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(100%)")
  //   $(".all").css("filter", "grayscale(100%)")
  // }else{
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  // }

  // if(mix = 1){
  //   $(".education").css("filter", "grayscale(100%)")
  //   $(".retail").css("filter", "grayscale(100%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(100%)")
  //   $(".civic").css("filter", "grayscale(100%)")
  //   $(".all").css("filter", "grayscale(100%)")
  // }else{
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  // }

  // if(ret = 1){
  //   $(".education").css("filter", "grayscale(100%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(100%)")
  //   $(".health").css("filter", "grayscale(100%)")
  //   $(".civic").css("filter", "grayscale(100%)")
  //   $(".all").css("filter", "grayscale(100%)")
  // }else{
  //   $(".education").css("filter", "grayscale(0%)")
  //   $(".retail").css("filter", "grayscale(0%)")
  //   $(".mixed").css("filter", "grayscale(0%)")
  //   $(".health").css("filter", "grayscale(0%)")
  //   $(".civic").css("filter", "grayscale(0%)")
  // }


    // civ--;
    // edu--;
    // hea--;
    // mix--;
    // ret--;


  $education = $("[id = education]");

  $retail = $("[id = retail]");

  $mixed = $("[id = mixed]");

  $health = $("[id = health]");

  $civic = $("[id = civic]");

  $all = $("[id = all]");

  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white
  $education.click(function(){
    $("#education").css("background-color", "white");
    $("#education").css("color", "black");
    $("#retail").css("background-color", "black");
    $("#retail").css("color", "white");
    $("#mixed").css("background-color", "black");
    $("#mixed").css("color", "white");
    $("#health").css("background-color", "black");
    $("#health").css("color", "white");
    $("#civic").css("background-color", "black");
    $("#civic").css("color", "white");

    $(".education").css("filter", "grayscale(0%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $retail.click(function(){
    $("#education").css("background-color", "black");
    $("#education").css("color", "white");
    $("#retail").css("background-color", "white");
    $("#retail").css("color", "black");
    $("#mixed").css("background-color", "black");
    $("#mixed").css("color", "white");
    $("#health").css("background-color", "black");
    $("#health").css("color", "white");
    $("#civic").css("background-color", "black");
    $("#civic").css("color", "white");

    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(0%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $mixed.click(function(){
    $("#education").css("background-color", "black");
    $("#education").css("color", "white");
    $("#retail").css("background-color", "black");
    $("#retail").css("color", "white");
    $("#mixed").css("background-color", "white");
    $("#mixed").css("color", "black");
    $("#health").css("background-color", "black");
    $("#health").css("color", "white");
    $("#civic").css("background-color", "black");
    $("#civic").css("color", "white");

    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(0%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $health.click(function(){
    $("#education").css("background-color", "black");
    $("#education").css("color", "white");
    $("#retail").css("background-color", "black");
    $("#retail").css("color", "white");
    $("#mixed").css("background-color", "black");
    $("#mixed").css("color", "white");
    $("#health").css("background-color", "white");
    $("#health").css("color", "black");
    $("#civic").css("background-color", "black");
    $("#civic").css("color", "white");

    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(0%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  });

  $civic.click(function(){
    $("#education").css("background-color", "black");
    $("#education").css("color", "white");
    $("#retail").css("background-color", "black");
    $("#retail").css("color", "white");
    $("#mixed").css("background-color", "black");
    $("#mixed").css("color", "white");
    $("#health").css("background-color", "black");
    $("#health").css("color", "white");
    $("#civic").css("background-color", "white");
    $("#civic").css("color", "black");

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
      $("#all").css("background-color", "white")
      $("#all").css("color", "black")

      $("#education").css("background-color", "black");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "black");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "black");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "black");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "black");
      $("#civic").css("color", "white");
      $(".education").css("filter", "grayscale(100%)")
      $(".retail").css("filter", "grayscale(100%)")
      $(".mixed").css("filter", "grayscale(100%)")
      $(".health").css("filter", "grayscale(100%)")
      $(".civic").css("filter", "grayscale(100%)")
    } else{
      $("#all").css("background-color", "white")
      $("#all").css("color", "black")
      $("#education").css("background-color", "black");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "black");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "black");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "black");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "black");
      $("#civic").css("color", "white");
      $("#all").css("background-color", "black")
      $("#all").css("color", "white")
      $(".education").css("filter", "grayscale(0%)")
      $(".retail").css("filter", "grayscale(0%)")
      $(".mixed").css("filter", "grayscale(0%)")
      $(".health").css("filter", "grayscale(0%)")
      $(".civic").css("filter", "grayscale(0%)")
    }
  })
  

  var $edu = function(){
    $(".education").css("filter", "grayscale(0%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var $ret = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(0%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var $hea = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(100%)")
    $(".health").css("filter", "grayscale(0%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var $mix = function(){
    $(".education").css("filter", "grayscale(100%)")
    $(".retail").css("filter", "grayscale(100%)")
    $(".mixed").css("filter", "grayscale(0%)")
    $(".health").css("filter", "grayscale(100%)")
    $(".civic").css("filter", "grayscale(100%)")
    $(".all").css("filter", "grayscale(100%)")
  }

  var $civ = function(){
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
  //   var randomIndex = Math.floor(Math.random()*20) % numberOfElements;
  //   while(checkedIndexes[randomIndex] != undefined){
  //       randomIndex = Math.floor(Math.random()*20) % numberOfElements;    
  //   }
  //   checkedIndexes[randomIndex] = true;
  //   elements[i].innerHTML = elementsInnerHtmls[randomIndex];    
  // }
});
