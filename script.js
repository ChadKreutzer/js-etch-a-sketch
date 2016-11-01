$(document).ready(function() {

  for (var i = 1; i <= (16 * 16); i++) {
    $('#container').append('<div class="square"></div>');
  }

  $('.square').hover(function(){
    var currentOpacity = +$(this).css('opacity');
    if (currentOpacity < 1) currentOpacity+= .10;
    $(this).css({'opacity': currentOpacity});
  });

});