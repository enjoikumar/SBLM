$(document).ready(function(){


  //naming the filter bar to call for functions later
  $education = $("#education");

  $retail = $("#retail");

  $mixed = $("#mixed");

  $health = $("#health");

  $civic = $("#civic");

  $all = $('#all');

  $all.css('background-color', 'white');

  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white
  //used the $education and then ('#education') for separation and make it easier to read
  //created it into a variable so..it can be pushed for later

  var $allColor= function(){
    $all.click(function(){
      $education.css('background-color', '#f5f5f5')
      $retail.css('background-color', '#f5f5f5')
      $mixed.css('background-color', '#f5f5f5')
      $health.css('background-color', '#f5f5f5')
      $civic.css('background-color', '#f5f5f5')
      $all.css('background-color', 'white')

      $('.education').addClass('notgray')
      $('.retail').addClass('notgray')
      $('.mixed').addClass('notgray')
      $('.health').addClass('notgray')
      $('.civic').addClass('notgray')
    });
  }
  $allColor()

  var $edu = function(){
    $education.click(function(){

      $education.css('background-color', 'white')
      $retail.css('background-color', '#f5f5f5')
      $mixed.css('background-color', '#f5f5f5')
      $health.css('background-color', '#f5f5f5')
      $civic.css('background-color', '#f5f5f5')
      $all.css('background-color', '#f5f5f5')

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

      $education.css('background-color', '#f5f5f5')
      $retail.css('background-color', 'white')
      $mixed.css('background-color', '#f5f5f5')
      $health.css('background-color', '#f5f5f5')
      $civic.css('background-color', '#f5f5f5')
      $all.css('background-color', '#f5f5f5')

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

      $education.css('background-color', '#f5f5f5')
      $retail.css('background-color', '#f5f5f5')
      $mixed.css('background-color', 'white')
      $health.css('background-color', '#f5f5f5')
      $civic.css('background-color', '#f5f5f5')
      $all.css('background-color', '#f5f5f5')

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
      $education.css('background-color', '#f5f5f5')
      $retail.css('background-color', '#f5f5f5')
      $mixed.css('background-color', '#f5f5f5')
      $health.css('background-color', 'white')
      $civic.css('background-color', '#f5f5f5')
      $all.css('background-color', '#f5f5f5')

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

      $education.css('background-color', '#f5f5f5')
      $retail.css('background-color', '#f5f5f5')
      $mixed.css('background-color', '#f5f5f5')
      $health.css('background-color', '#f5f5f5')
      $civic.css('background-color', 'white')
      $all.css('background-color', '#f5f5f5')

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
    if ($('.edutr').length){
      $('.tableTitle').after($('.edutr'))

      $('.edutr').css('background-color', 'white')
      $('.rettr').css('background-color', '#f5f5f5')
      $('.mixtr').css('background-color', '#f5f5f5')
      $('.heatr').css('background-color', '#f5f5f5')
      $('.civtr').css('background-color', '#f5f5f5')
    }
  })

  $retail.click(function(){
    if ($('.ret').length){
      $('.wrap').prepend($('.ret'))
    }
    if ($('.rettr').length){
      $('.tableTitle').after($('.rettr'))

      $('.edutr').css('background-color', '#f5f5f5')
      $('.rettr').css('background-color', 'white')
      $('.mixtr').css('background-color', '#f5f5f5')
      $('.heatr').css('background-color', '#f5f5f5')
      $('.civtr').css('background-color', '#f5f5f5')
    }
  })

  $mixed.click(function(){
    if ($('.mix').length){
      $('.wrap').prepend($('.mix'))
    }
    if ($('.mixtr').length){
      $('.tableTitle').after($('.mixtr'))

      $('.edutr').css('background-color', '#f5f5f5')
      $('.rettr').css('background-color', '#f5f5f5')
      $('.mixtr').css('background-color', 'white')
      $('.heatr').css('background-color', '#f5f5f5')
      $('.civtr').css('background-color', '#f5f5f5')
    }
  })

  $health.click(function(){
    if ($('.hea').length){
      $('.wrap').prepend($('.hea'))
    }
    if ($('.heatr').length){
      $('.tableTitle').after($('.heatr'))

      $('.edutr').css('background-color', '#f5f5f5')
      $('.rettr').css('background-color', '#f5f5f5')
      $('.mixtr').css('background-color', '#f5f5f5')
      $('.heatr').css('background-color', 'white')
      $('.civtr').css('background-color', '#f5f5f5')
    }
  })

  $civic.click(function(){
    if ($('.civ').length){
      $('.wrap').prepend($('.civ'))
    }
    if ($('.civtr').length){
      $('.tableTitle').after($('.civtr'))

      $('.edutr').css('background-color', '#f5f5f5')
      $('.rettr').css('background-color', '#f5f5f5')
      $('.mixtr').css('background-color', '#f5f5f5')
      $('.heatr').css('background-color', '#f5f5f5')
      $('.civtr').css('background-color', 'white')
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




  $('#view').css('background-color', 'white')

  $('#thumbnail').click(function(){
    $('table').css('display', 'block');
    $('.wrap').css('display', 'none');

    $('#thumbnail').css('background-color', 'white')
    $('#view').css('background-color', '#f5f5f5')
  })

  $('#view').click(function(){
    $('table').css('display', 'none');
    $('.wrap').css('display', 'block');

    $('#thumbnail').css('background-color', '#f5f5f5')
    $('#view').css('background-color', 'white')
  })

  if($(window).width() >= 1920){
    $('.br').find('br').remove();
  }

});


