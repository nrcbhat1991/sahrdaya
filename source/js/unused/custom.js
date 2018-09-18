/*=====================================================================================
                            $(document).ready(function()
======================================================================================*/

$(window).on('load', function () {
    $('[data-wy], [data-wyanim]').waypoint({
        handler: function () {
            $(this.element).addClass("wy-anim")
        },
        offset: '100%'
    });
    //    $(".loadz").fadeOut("fast");
});



$(document).ready(function () {

    /*----------------------- BG-Image Wrapper Starts ---------------------------*/

    $(".img-wrp").each(function () {
        var imageUrl = $(this).find('img').attr("src"),
            imageUrl = imageUrl.replace(/ /g, '%20'),
            imageUrl = imageUrl.replace("(", '%28'),
            imageUrl = imageUrl.replace(")", '%29');
        $(this).find('img').css("visibility", "hidden");
        $(this).css('background-image', 'url(' + imageUrl + ')').css("background-size", "cover");
    });

    /*----------------------- BG-Image Wrapper Ends ---------------------------*/



    /*----------------------- Banner Slide Starts ------------------------*/

    $('.bnr-sldr').flickity({
        cellAlign: 'left',
        wrapAround: true,
        contain: true,
        autoPlay: 4000,
        bgLazyLoad: 2,
        prevNextButtons: true,
        pageDots: false
    });

    /*----------------------- Banner Slide Ends ------------------------*/


    /*----------------------- Acadamics Slide Ends ------------------------*/

    $('.pgaccdemic-sldr').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        wrapAround: true,
        prevNextButtons: true,
        pageDots: false
    });

    /*----------------------- Acadamics Slide Ends ------------------------*/

    /*----------------------- Acadamics Slide Ends ------------------------*/


    var $carousel = $('.pgnews-sldr').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });
    var flkty = $carousel.data('flickity');
    // elements
    var $cellButtons = $('.pgnews-det h6').find('button');

    $('.pgnews-det .btn-prev').on('click', function () {
        $carousel.flickity('previous');
    });
    $('.pgnews-det .btn-nxt').on('click', function () {
        $carousel.flickity('next');
    });

    /*----------------------- Acadamics Slide Ends ------------------------*/


    /*----------------------- Thumnail Slider Ends ------------------------*/

    $('.pgstudentsay-sldr').flickity({
        prevNextButtons: false,
        pageDots: false
    });
    // 2nd carousel, navigation
    $('.pglifethumb-sldr').flickity({
        cellAlign: 'left',
        asNavFor: '.pgstudentsay-sldr',
        contain: true,
        pageDots: false,
        prevNextButtons: false
    });


    /*----------------------- Thumnail Slider Ends ------------------------*/


    /*----------------------- Thumnail Slider Ends ------------------------*/

    $('.pgrecruters-sldr').slick({
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        pauseOnHover: false,
        draggable: false
    });

    /*----------------------- Thumnail Slider Starts ------------------------*/
    
    
    $('.pggalnews-sldr').slick({
        slidesToShow: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true,
        nav: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });


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





    /*----------------------- Ripple Effect Light Starts ---------------------------*/

    $(function () {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-2',
                classout: 'dl-animate-out-2'
            }
        });
    });


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

				[].slice.call(document.querySelectorAll('.matinp input, .matinp textarea, .matinp select')).forEach(function (inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl, 'inpfld');
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target, 'inpfld');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target, 'inpfld');
            }
        }
    })();

    /*----------------------- Input Style Ends ------------------------*/


    /*----------------------- Gallery Fancy Box Starts ----------------------*/



    $('a.fancybox, .pggal-bx a').fancybox({
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





    function checkSize() {
        $(window).bind('scroll', function () {
            var scroller = 400;
            if ($(window).scrollTop() > scroller) {
                $('header').addClass('fxd');
            } else {
                $('header').removeClass('fxd');
            }
        });
    }

    checkSize();
    $(window).resize(checkSize);

    /*----------------------- Menu Lock Ends ---------------------------*/


});
