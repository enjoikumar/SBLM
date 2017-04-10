
$(document).ready(function(){

  $education = $("[id = education]");

  $retail = $("[id = retail]");

  $mixed = $("[id = mixed]");

  $health = $("[id = health]");

  $civic = $("[id = civic]");

  $all = $("[id = all]");

  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white

  var edu = function(){
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
  }
  edu()

  var ret = function(){
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
  }
  ret()

  var mix = function(){
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
  }
  mix()

  var hea = function(){
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
  }
  hea()

  var civ = function(){
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
  }
  civ()

  var count = 1
  $all.click(function(){
    count++;
    if(count%2){
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
      console.log("in the else")
    }
  })


  $retail.trigger('click')





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
