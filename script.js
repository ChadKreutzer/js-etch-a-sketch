$(document).ready(function() {
    for (var i = 1; i <= (16 * 16); i++) {
        $('#container').append('<div class="square"></div>');
    }
    $('.square').hover(function(){
        $(this).css({'opacity': '.5'});
    });
});