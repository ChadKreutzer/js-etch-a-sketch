$(document).ready(function() {

  createGrid(16);
  $('.square').hover(colorIn);

  $('button').on('click', function(){
    $('.square').css({'opacity': '.1'});
    var squaresPerSide = prompt("How many squares per side?", 16);

    if(squaresPerSide != null){
      if(squaresPerSide < 1 || squaresPerSide > 100){
       alert("Number out of range. Try again."); 
      }
      else {
        var squareSize = (800 / squaresPerSide);

        createGrid(squaresPerSide);      
        $('.square').css({'height': squareSize + 'px', 'width': squareSize + 'px'});
      }   
    }    
    $('.square').hover(colorIn);   
  });

  function colorIn(){
    var currentOpacity = +$(this).css('opacity');
    if (currentOpacity < 1) currentOpacity+= .10;
    $(this).css({'opacity': currentOpacity});
  }
  function createGrid(sqPsd) {
    var numSquares = sqPsd * sqPsd;
    $('#container').empty();
    for (var i = 1; i <= numSquares; i++) {
      $('#container').append('<div class="square"></div>');
    }
  }
});