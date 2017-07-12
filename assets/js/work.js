$(document).ready(function(){


  //naming the filter bar to call for functions later
  $education = $("#education");

  $retail = $("#retail");

  $mixed = $("#mixed");

  $health = $("#health");

  $civic = $("#civic");

  $all =$('#all');


  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white
  //used the $education and then ('#education') for separation and make it easier to read
  //created it into a variable so..it can be pushed for later

  var $all= function(){
    $("#education").css("background-color", "#e4e4e4");
    $("#education").css("color", "#333");
    $("#retail").css("background-color", "#e4e4e4");
    $("#retail").css("color", "#333");
    $("#mixed").css("background-color", "#e4e4e4");
    $("#mixed").css("color", "#333");
    $("#health").css("background-color", "#e4e4e4");
    $("#health").css("color", "#333");
    $("#civic").css("background-color", "#e4e4e4");
    $("#civic").css("color", "#333");

    $('.education').addClass('notgray')
    $('.retail').addClass('notgray')
    $('.mixed').addClass('notgray')
    $('.health').addClass('notgray')
    $('.civic').addClass('notgray')
  }
  $all()

  var $edu = function(){
    $education.click(function(){
      $('#education').css("background-color", "white");
      $("#education").css("color", "#333");
      $("#retail").css("background-color", "#e4e4e4");
      $("#retail").css("color", "#333");
      $("#mixed").css("background-color", "#e4e4e4");
      $("#mixed").css("color", "#333");
      $("#health").css("background-color", "#e4e4e4");
      $("#health").css("color", "#333");
      $("#civic").css("background-color", "#e4e4e4");
      $("#civic").css("color", "#333");

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
      $("#education").css("background-color", "#e4e4e4");
      $("#education").css("color", "#333");
      $("#retail").css("background-color", "white");
      $("#retail").css("color", "#333");
      $("#mixed").css("background-color", "#e4e4e4");
      $("#mixed").css("color", "#333");
      $("#health").css("background-color", "#e4e4e4");
      $("#health").css("color", "#333");
      $("#civic").css("background-color", "#e4e4e4");
      $("#civic").css("color", "#333");
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
      $("#education").css("background-color", "#e4e4e4");
      $("#education").css("color", "#333");
      $("#retail").css("background-color", "#e4e4e4");
      $("#retail").css("color", "#333");
      $("#mixed").css("background-color", "white");
      $("#mixed").css("color", "#333");
      $("#health").css("background-color", "#e4e4e4");
      $("#health").css("color", "#333");
      $("#civic").css("background-color", "#e4e4e4");
      $("#civic").css("color", "#333");
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
      $("#education").css("background-color", "#e4e4e4");
      $("#education").css("color", "#333");
      $("#retail").css("background-color", "#e4e4e4");
      $("#retail").css("color", "#333");
      $("#mixed").css("background-color", "#e4e4e4");
      $("#mixed").css("color", "#333");
      $("#health").css("background-color", "white");
      $("#health").css("color", "#333");
      $("#civic").css("background-color", "#e4e4e4");
      $("#civic").css("color", "#333");
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
      $("#education").css("background-color", "#e4e4e4");
      $("#education").css("color", "#333");
      $("#retail").css("background-color", "#e4e4e4");
      $("#retail").css("color", "#333");
      $("#mixed").css("background-color", "#e4e4e4");
      $("#mixed").css("color", "#333");
      $("#health").css("background-color", "#e4e4e4");
      $("#health").css("color", "#333");
      $("#civic").css("background-color", "white");
      $("#civic").css("color", "#333");
      $('.civic').addClass('color')

      $('.education').removeClass('notgray')
      $('.retail').removeClass('notgray')
      $('.mixed').removeClass('notgray')
      $('.health').removeClass('notgray')
      $('.civic').addClass('notgray')
    });
  }
  $civ()


  //pushed all the variables from lines 5-15 into an array


  var clicks = [
    $education,
    $retail,
    $mixed,
    $health,
    $civic
  ]

  //the array's order is then shuffled randomly
  var $click = clicks[Math.floor(Math.random()*clicks.length)]; 


  //it is then triggered thus a random studio getting highlighted
  // $click.trigger('click')

  $('.education').addClass('notgray')
  $('.retail').addClass('notgray')
  $('.mixed').addClass('notgray')
  $('.health').addClass('notgray')
  $('.civic').addClass('notgray')




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

  //commenting out the shuffle will enable the shuffle function
  //BUT PUSHING THE DIVS TO THE FRONT WONT WORK

  //when clicked on the filter nav
  //elements of the corresponding studio will be pushed to the front

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

  //same this as the click function
  //but it randomly pushes a studio to the first line

  // var buttons = [
  //   $education,
  //   $retail,
  //   $mixed,
  //   $health,
  //   $civic
  // ]

  // var $press = buttons[Math.floor(Math.random()*buttons.length)]; 

  // $press.trigger('click')





  $('#thumbnail').click(function(){
    $('table').css('display', 'block');
    $('.wrap').css('display', 'none');
  })

  $('#view').click(function(){
    $('table').css('display', 'none');
    $('.wrap').css('display', 'block');
  })

  if($(window).width() >= 1920){
    $('.br').find('br').remove();
  }

});
