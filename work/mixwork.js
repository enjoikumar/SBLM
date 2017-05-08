
$(document).ready(function(){

  $education = $("[id = education]");

  $retail = $("[id = retail]");

  $mixed = $("[id = mixed]");

  $health = $("[id = health]");

  $civic = $("[id = civic]");

  $all = $("[id = all]");

  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white

  var $edu = function(){
    $education.click(function(){
      $('#education').css("background-color", "white");
      $("#education").css("color", "black");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");

      $('.education').addClass('notgray')
      $('.retail').removeClass('notgray')
      $('.mixed').removeClass('notgray')
      $('.health').removeClass('notgray')
      $('.civic').removeClass('notgray')
    });
  }
  $edu()

  var $ret = function(){
    $retail.click(function(){
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "white");
      $("#retail").css("color", "#212121");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");
      $('.retail').addClass('color')

      $('.education').removeClass('notgray')
      $('.retail').addClass('notgray')
      $('.mixed').removeClass('notgray')
      $('.health').removeClass('notgray')
      $('.civic').removeClass('notgray')
    });
  }
  $ret()

  var $mix = function(){
    $mixed.click(function(){
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "white");
      $("#mixed").css("color", "#212121");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");
      $('.mixed').addClass('color')

      $('.education').removeClass('notgray')
      $('.retail').removeClass('notgray')
      $('.mixed').addClass('notgray')
      $('.health').removeClass('notgray')
      $('.civic').removeClass('notgray')
    });
  }
  $mix()

  var $hea = function(){
    $health.click(function(){
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "white");
      $("#health").css("color", "#212121");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");
      $('.health').addClass('color');

      $('.education').removeClass('notgray')
      $('.retail').removeClass('notgray')
      $('.mixed').removeClass('notgray')
      $('.health').addClass('notgray')
      $('.civic').removeClass('notgray')
    });
  }
  $hea()

  var $civ = function(){
    $civic.click(function(){
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "white");
      $("#civic").css("color", "#212121");
      $('.civic').addClass('color')

      $('.education').removeClass('notgray')
      $('.retail').removeClass('notgray')
      $('.mixed').removeClass('notgray')
      $('.health').removeClass('notgray')
      $('.civic').addClass('notgray')
    });
  }
  $civ()

  var $count = 1
  $all.click(function(){
    $count++;
    if($count%2){
      $("#all").html('&#9711;')
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");

      $(".education").css("filter", "grayscale(100%)")
      $(".retail").css("filter", "grayscale(100%)")
      $(".mixed").css("filter", "grayscale(100%)")
      $(".health").css("filter", "grayscale(100%)")
      $(".civic").css("filter", "grayscale(100%)")
    } else{
      $("#all").html('&#9673;')
      $("#education").css("background-color", "#212121");
      $("#education").css("color", "white");
      $("#retail").css("background-color", "#212121");
      $("#retail").css("color", "white");
      $("#mixed").css("background-color", "#212121");
      $("#mixed").css("color", "white");
      $("#health").css("background-color", "#212121");
      $("#health").css("color", "white");
      $("#civic").css("background-color", "#212121");
      $("#civic").css("color", "white");
      $("#all").css("background-color", "#212121")
      $("#all").css("color", "white")

      $('.education').addClass('notgray')
      $('.retail').addClass('notgray')
      $('.mixed').addClass('notgray')
      $('.health').addClass('notgray')
      $('.civic').addClass('notgray')
    }
  })

  var clicks = [
    $('#education'),
    $('#retail'),
    $('#mixed'),
    $('#health'),
    $('#civic')
  ]

  var click = clicks[Math.floor(Math.random()*clicks.length)]; 

  $mixed.trigger('click')


  


  //RANDOMIZE THE DIVS
  //=============================
  var shuffle = function(){

    var elements = $('.first');
    var elementsInnerHtmls = [];

    for( var i = 0 ; i < elements.length ; i++){
      elementsInnerHtmls.push(elements[i].innerHTML); 
    }

    var checkedIndexes = [];
    for( var i = 0 ; i < elements.length ; i++){
      var randomIndex = Math.floor(Math.random()*25) % elements.length;
      while(checkedIndexes[randomIndex] != undefined){
          randomIndex = Math.floor(Math.random()*25) % elements.length;   
      }

      checkedIndexes[randomIndex] = true;
      elements[i].innerHTML = elementsInnerHtmls[randomIndex];
      newArray = elements[i].innerHTML
      newElements =  newArray;
    }
  }
  // shuffle()



  $education.click(function(){
      if ($('.edu').length){
      $('.wrap').prepend($('.edu'))
    }
  })

  $retail.click(function(){
    if ($('.ret').length){
      $('.wrap').prepend($('.ret'))
    }
  })

  $mixed.click(function(){
    if ($('.mix').length){
      $('.wrap').prepend($('.mix'))
    }
  })

  $mixed.trigger('click')

  $health.click(function(){
    if ($('.hea').length){
      $('.wrap').prepend($('.hea'))
    }
  })

  $civic.click(function(){
    if ($('.civ').length){
      $('.wrap').prepend($('.civ'))
    }
  })
});
