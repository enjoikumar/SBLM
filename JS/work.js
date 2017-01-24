console.log("you're in the work page")


$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.sets a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});

$('.sets a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.sets a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});