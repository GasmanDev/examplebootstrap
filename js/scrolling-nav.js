
$(document).ready(function () {
  (function ($) {
    "use strict"; // Start of use strict
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 76)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 76
    });
    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 700) {
        $("#mainNav").removeClass("navbar-dark");
        $("#mainNav").addClass("navbar-light");
        $("#mainNav").addClass("bg-light");
        $("#brandtext").removeClass("text-light");
      } else {
        $("#mainNav").removeClass("bg-light");
        $("#mainNav").removeClass("navbar-light");
        $("#mainNav").addClass("navbar-dark");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  })(jQuery); // End of use strict
  // Sidebar
    $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  // animation
    $('.carousel').carousel('cycle')
    $('.carousel').carousel({
      interval: 2000
    })
    
  /* Every time the window is scrolled ... */
    $(window).scroll(function () {
      /* Check the location of each desired element */
      $('.anim-slidein').each(function (i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object - 200) {
          $(this).addClass('w3-animate-bottom');
          $(this).animate({ 'opacity': '1' }, 1000);
        }
      });
    });
  // Filter
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      }
      else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

      }
    });

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
});