//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(function(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');
        $('.parallax-container').height( $(window).height() * 0.5 | 0 );
    } else {
        $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
        }).trigger('resize');
    }
});

$('.parallax-window-services').parallax({
    imageSrc: '../img/hd.jpg',
    naturalWidth: 600,
    naturalHeight: 400,
    bleed:0,
    speed:0.1,
});

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();


/*
  PROGRESS WITH WAYPOINT ACTIVE
================================== */

var ProWey = $('.skill-progress');
if (ProWey.length > 0) {
    ProWey.waypoint(function () {
        // element
        jQuery('.skill-bar').each(function() {
            jQuery(this).find('.progress-content').animate({
                width:jQuery(this).attr('data-percentage')
            },2000);

            jQuery(this).find('.progress-mark').animate(
                {left:jQuery(this).attr('data-percentage')},
                {
                    duration: 2150,
                    step: function(now, fx) {
                        var data = Math.round(now);
                        jQuery(this).find('.percent').html(data + '%');
                    }
                });

        });
    }, {offset: '90%'});
}

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').addClass('scroll-active');
        } else {
            $('.scrollToTop').removeClass('scroll-active');
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

//<![CDATA[
$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})
//]]>
$("#js-bootstrap-offcanvas").trigger("offcanvas.toggle"); // Toggle open & close
$("#js-bootstrap-offcanvas").trigger("offcanvas.open"); // Open the menu
$("#js-bootstrap-offcanvas").trigger("offcanvas.close"); // Close the menu

$(function(){
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    var offCanvas = $(".js-offcanvas-has-events"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
        offCanvas.removeClass('is-open');
    });
});
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(17.443746, 78.381257), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#78b79d"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#fcfcfc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#d0e4b8"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#d0e4b8"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#e6f3d6"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"},{"weight":"0.5"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#c1c1c1"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#f1f8f5"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#f1f8f5"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#666666"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#f1f8f5"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('myMap');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(17.443746, 78.381257),
        map: map,
        title: 'Snazzy!'
    });
}


