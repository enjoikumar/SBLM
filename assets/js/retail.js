
$(document).ready(function(){

  $education = $("#education");

  $retail = $("#retail");

  $mixed = $("#mixed");

  $health = $("#health");

  $civic = $("#civic");

  $all = $('#all');
  


  // each click function changes the grayscale of the item to none
  // making it in color while the others remain in black and white

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


  $retail.trigger('click')





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

  $retail.trigger('click')
  
});









