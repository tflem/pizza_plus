$(document).ready(function() {

    // Sticky Navigation
    $('.js--introduction').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '2px;'
    });

    // Scroll on Buttons
    $('.js--scroll-to-menu-items').click(function () {
        $('html, body').animate({scrollTop: $('.js--menu-items').offset().top - 40}, 1000);
    });

    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--about').offset().top - 40}, 1000);
    });

    // Navigation Scroll
    $(function() {
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--sidebar-nav');
        var icon = $('.js--nav-icon i');

        nav.animate({ width: 'toggle' }, 350);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
          } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
          }
    });

    /* Map */
    new GMaps({
    div: '.map',
    lat: 36.1038256,
    lng: -86.7225316,
    scrollwheel: false,
    zoom: 16
  });
});
