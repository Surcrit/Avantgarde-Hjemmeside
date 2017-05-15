function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#trapez_2').addClass('stick');
      //  $('#sticky-anchor').height($('#trapez_2').outerHeight());
    } else {
        $('#trapez_2').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}


function sticky_relocate2() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#trapez_3').addClass('stick');
      //  $('#sticky-anchor').height($('#trapez_2').outerHeight());
    } else {
        $('#trapez_3').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}


/*
$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

*/
