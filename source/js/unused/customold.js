/*=====================================================================================
                            $(document).ready(function()
======================================================================================*/

$(window).on('load', function() {
    //    $(".loaderz").fadeOut("slow");
});



$(document).ready(function () {

    /*----------------------- BG-Image Wrapper Starts ---------------------------*/

    $(".img-wrapper-old").each(function () {
        var imageUrl = $(this).find('img').attr("src");
        $(this).find('img').css("visibility", "hidden");
        $(this).css('background-image', 'url(' + imageUrl + ')').css("background-repeat", "no-repeat").css("background-size", "cover").css("background-position", "50% 50%");
    });

    $(".img-wrapper").each(function () {
        var imageUrl = $(this).find('img').attr("src"),
            imageUrl = imageUrl.replace(/ /g, '%20'),
            imageUrl = imageUrl.replace("(", '%28'),
            imageUrl = imageUrl.replace(")", '%29');
        $(this).find('img').css("visibility", "hidden");
        $(this).css('background-image', 'url(' + imageUrl + ')').css("background-size", "cover");
    });

    /*----------------------- BG-Image Wrapper Ends ---------------------------*/
    
//    $(function() {
//        var isDragging = false;
//        $(".slide")
//        .mousedown(function() {
//            isDragging = false;
//        })
//        .mousemove(function() {
//            isDragging = true;
//         })
//        .mouseup(function() {
//            var wasDragging = isDragging;
//            isDragging = false;
//            alert("2");
//            if (!wasDragging) {
//                alert("3");
//            }
//        });
//    });

    /*----------------------- Testimonial Slide Starts ------------------------*/

    $('.testi-slider').slick({
        slidesToShow: 2,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    /*----------------------- Testimonial Slide Ends ------------------------*/

    /*----------------------- Service Details Slide Starts ------------------------*/

    $('.service-det-slider').slick({
        slidesToShow: 4,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: true,
        appendArrows: $("section.service-slider-wrp h4 span"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    /*----------------------- Service Details Slide Ends ------------------------*/






    /*----------------------- Video Fancybox Starts ---------------------------*/


    /*----------------------- Video Fancybox Ends ---------------------------*/



    /*----------------------- Ripple Effect Light Starts ---------------------------*/

    Waves.init();
    Waves.attach('.butter ', ['waves-float', 'waves-light']);


    /*----------------------- Ripple Effect Light Ends ---------------------------*/



    /*----------------------- Input Style Starts ------------------------*/

    (function () {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function () {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function () {
                    return this.replace(rtrim, '');
                };
            })();
        }

				[].slice.call(document.querySelectorAll('.input__field')).forEach(function (inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl.parentNode, 'input--filled');
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target.parentNode, 'input--filled');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target.parentNode, 'input--filled');
            }
        }
    })();

    /*----------------------- Input Style Ends ------------------------*/


    /*----------------------- Gallery Fancy Box Starts ----------------------*/


    
    $('a.fancybox').fancybox({
        protect: true
    });


    /*----------------------- Gallery Fancy Box Ends ----------------------*/


    /*----------------------- Carousel Caption Lettering Starts ---------------------------*/

//    $(".latest-event span").lettering('words');

    /*----------------------- Carousel Caption Lettering Ends ---------------------------*/




    /*----------------------- Date Picker Starts ------------------------*/

//    $('input.date-pickers').datepicker();

    /*----------------------- Date Picker Ends ------------------------*/


    /*----------------------- Menu Lock Starts ---------------------------*/

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 150);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }


    /*----------------------- Menu Lock Ends ---------------------------*/







    /*----------------------- Contact Map Starts ---------------------------*/

    //Google Map 
    //    var map;
    //    var iconBase = 'images/'
    //
    //    function initialize() {
    //        var styles = [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#d9ecff"},{"saturation":55},{"lightness":30},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":50},{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f7c884"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]}];
    //        var mapOptions1 = {
    //            zoom: 16,
    //            scrollwheel: false,
    //            disableDefaultUI: true,
    //            center: new google.maps.LatLng(25.202660 + 0.00002, 55.278255 + 0.001)
    //        };
    //        map = new google.maps.Map(document.getElementById('contact_map_id'),
    //            mapOptions1);
    //
    //        var myLatlng = new google.maps.LatLng(25.202660, 55.278255);
    //        var marker1 = new google.maps.Marker({
    //            position: myLatlng,
    //            map: map,
    //            title: 'Bonefire',
    //            icon: iconBase + 'map-icon.png'
    //        });
    //
    //        map.setOptions({
    //            styles: styles
    //        });
    //    }
    //    google.maps.event.addDomListener(window, 'load', initialize);
    //    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //        initialize();
    //    });

    /*----------------------- Contact Map ends ---------------------------*/


});
