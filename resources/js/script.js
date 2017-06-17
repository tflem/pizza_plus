$(document).ready(function() {

    $('.js--introduction').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '8px;'    
    });
});
