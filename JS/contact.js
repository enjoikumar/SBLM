// console.log('ice')

$(document).ready(function(){

  var isWebkit = navigator && navigator.userAgent.match(/webkit/i);
  var $root = $(isWebkit ? 'body' : 'html');
  var elements = $('div'), elcount = elements.length;
  var scrolling = false;
  // Replacing the CSS attr(... url)
  elements.css('background-image', function(i){
    return 'url('+$(this).data('img')+')';
  });

  //Add permalinks
elements.each(function(i){
  var $t = $(this);
  var id = $t.attr('id');
  if(!id) return;
  $('<a>').addClass('permalink')
          .attr('href', '#'+id)
          .appendTo($t);
  });

});



