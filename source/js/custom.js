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
    /*----------------------- Bootstrap Carousel Pause Starts ---------------------------*/

    var circleProgress = (function (selector) {
        var wrapper = document.querySelectorAll(selector);
        Array.prototype.forEach.call(wrapper, function (wrapper, i) {
            var wrapperWidth,
                wrapperHeight,
                percent,
                innerHTML,
                context,
                lineWidth,
                centerX,
                centerY,
                radius,
                newPercent,
                speed,
                from,
                to,
                duration,
                start,
                strokeStyle;
            var isPaused = false;
            var kojo, mojo;

            var getValues = function () {
                wrapperHeight = wrapperWidth = 54;
                percent = wrapper.getAttribute('data-cp-percentage');
                innerHTML = '<canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
                wrapper.innerHTML = innerHTML;
                canvas = wrapper.querySelector(".circleProgressCanvas");
                wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
                context = canvas.getContext('2d');
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                newPercent = 0;
                speed = 1;
                from = kojo || 0;
                to = percent;
                duration = 6000;
                lineWidth = 10;
                radius = canvas.width / 2 - lineWidth;
                strokeStyle = wrapper.getAttribute('data-cp-color');
                start = new Date().getTime();
            };

            function animate() {
                if (isPaused) {
                    cancelAnimationFrame(animate);
                } else {
                    requestAnimationFrame(animate);
                    mojo = newPercent;
                    // return;
                }
                var time = new Date().getTime() - start;
                if (time <= duration) {
                    var x = easeInOutQuart(time, from, to - from, duration);
                    newPercent = x;
                    drawArc();
                }
            }

            function drawArc() {
                var circleStart = 1.5 * Math.PI;
                var circleEnd = circleStart + (newPercent / 50) * Math.PI;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = "transparent";
                context.stroke();
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = strokeStyle;
                context.stroke();
            }
            var update = function () {
                getValues();
                animate();
            }
            update();
            $('#carouselExampleControls').on('slide.bs.carousel', function () {
                kojo = 0;
                update();
            });

            $(function () {

                var crsl = $('#carouselExampleControls'),
                    playpause = $('.playpause-btn');
                playpause.click(function () {
                    togglePlay($(this));
                    return false;
                });
                function togglePlay($this) {
                    if ($this.attr('data-play') === 'on') {
                        $this.attr('data-play', 'off');
                        crsl.carousel('pause');
                        isPaused = true;
                    } else {
                        $this.attr('data-play', 'on');
                        crsl.carousel('cycle');
                        isPaused = false;
                        kojo = mojo;
                        update();
                    }
                }
            });
        });

        //
        // http://easings.net/#easeInOutQuart
        //  t: current_time
        //  b: beginning_value
        //  c: change_in_value
        //  d: duration_time
        // var x = easeInOutQuart(time, from, to - from, duration);
        function easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            // return c*(t/=d)*t + b;
        }

    });
    circleProgress('.counter');

    /*----------------------- Bootstrap Carousel Pause Ends ---------------------------*/

    //    $(".loadz").fadeOut("fast");
});



$(document).ready(function () {

    /*----------------------- BG-Image Wrapper Starts ---------------------------*/

    $(".img-wrp").each(function () {
        var imageUrl = $(this).find('img').first(),
            imageAttr = imageUrl.attr("src"),
            imageAttr = imageAttr.replace(/ /g, '%20'),
            imageAttr = imageAttr.replace("(", '%28'),
            imageAttr = imageAttr.replace(")", '%29');
        imageUrl.css("visibility", "hidden");
        $(this).css('background-image', 'url(' + imageAttr + ')').css("background-size", "cover");
    });

    /*----------------------- BG-Image Wrapper Ends ---------------------------*/


    $('#carouselExampleControls').carousel({
        pause: "false"
    });



    // /*----------------------- Acadamics Slide Ends ------------------------*/

    // $('.pgaccdemic-sldr').flickity({
    //     cellAlign: 'left',
    //     contain: true,
    //     autoPlay: true,
    //     wrapAround: true,
    //     prevNextButtons: true,
    //     pageDots: false
    // });

    // /*----------------------- Acadamics Slide Ends ------------------------*/

    // /*----------------------- Acadamics Slide Ends ------------------------*/


    // var $carousel = $('.pgnews-sldr').flickity({
    //     cellAlign: 'left',
    //     contain: true,
    //     autoPlay: true,
    //     wrapAround: true,
    //     prevNextButtons: false,
    //     pageDots: false
    // });
    // var flkty = $carousel.data('flickity');
    // // elements
    // var $cellButtons = $('.pgnews-det h6').find('button');

    // $('.pgnews-det .btn-prev').on('click', function () {
    //     $carousel.flickity('previous');
    // });
    // $('.pgnews-det .btn-nxt').on('click', function () {
    //     $carousel.flickity('next');
    // });

    // /*----------------------- Acadamics Slide Ends ------------------------*/


    // /*----------------------- Thumnail Slider Ends ------------------------*/

    // $('.pgstudentsay-sldr').flickity({
    //     prevNextButtons: false,
    //     pageDots: false
    // });
    // // 2nd carousel, navigation
    // $('.pglifethumb-sldr').flickity({
    //     cellAlign: 'left',
    //     asNavFor: '.pgstudentsay-sldr',
    //     contain: true,
    //     pageDots: false,
    //     prevNextButtons: false
    // });


    // /*----------------------- Thumnail Slider Ends ------------------------*/




    /*----------------------- Acadamics Slide Ends ------------------------*/


    var $carousel = $('.pgnews-sldr').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });

    $('.pgrecruters-sldr').slick({
        slidesToShow: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: false,
        appendArrows: $("section.pgnews-wrp h3 span")
    });

    /*----------------------- Acadamics Slide Ends ------------------------*/


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





    // /*----------------------- Ripple Effect Light Starts ---------------------------*/

    // $(function () {
    //     $('#dl-menu').dlmenu({
    //         animationClasses: {
    //             classin: 'dl-animate-in-2',
    //             classout: 'dl-animate-out-2'
    //         }
    //     });
    // });


    // /*----------------------- Ripple Effect Light Ends ---------------------------*/



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
    // controls: ['<div class="control-pad"><button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><div class="plyr_img"><img src="images/video-icon.png"></div><span class="plyr__sr-only">Play</span><h4>Watch Video</h4></button></div> <div class="plyr__controls"> <button type="button" class="plyr__control" data-plyr="restart"> <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg> <span class="plyr__tooltip" role="tooltip">Restart</span> </button> <button type="button" class="plyr__control" data-plyr="rewind"> <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg> <span class="plyr__tooltip" role="tooltip">Rewind{seektime}secs</span> </button> <button type="button" class="plyr__control" aria-label="Play,{title}" data-plyr="play"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span> </button> <button type="button" class="plyr__control" data-plyr="fast-forward"> <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg> <span class="plyr__tooltip" role="tooltip">Forward{seektime}secs</span> </button> <div class="plyr__progress"> <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"> <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress> <span role="tooltip" class="plyr__tooltip">00:00</span> </div><div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div><div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div><button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span> </button> <div class="plyr__volume"> <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"> </div><button type="button" class="plyr__control" data-plyr="captions"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span> </button> <button type="button" class="plyr__control" data-plyr="fullscreen"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span> </button></div>'],

    // var plyr = new Plyr('#showreel', {
    //     autoplay: false,
    //     controls: ["<div class='title'>","This is some text","</div>","<div class='button'>","<button type='button' class='btn btn-secondary'>This is a button</button>","</div>","<div class='plyr__controls'>", "<button type='button' data-plyr='play'>", "<svg><use xlink:href='#plyr-play'></use></svg>", "<span class='plyr__sr-only'>Play</span>", "</button>", "<button type='button' data-plyr='pause'>", "<svg><use xlink:href='#plyr-pause'></use></svg>", "<span class='plyr__sr-only'>Pause</span>", "</button>", "<span class='plyr__time'>", "<span class='plyr__sr-only'>Current time</span>", "<span class='plyr__time--current'>00:00</span>", "</span>", "<span class='plyr__progress'>", "<label for='seek{id}' class='plyr__sr-only'>Seek</label>", "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>", "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>", "<progress class='plyr__progress--buffer' max='100' value='0'>", "<span>0</span>% buffered", "</progress>", "<span class='plyr__tooltip'>00:00</span>", "</span>", "<span class='plyr__time'>", "<span class='plyr__sr-only'>Duration</span>", "<span class='plyr__time--duration'>00:00</span>", "</span>", "<button type='button' data-plyr='mute'>", "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>", "<svg><use xlink:href='#plyr-volume'></use></svg>", "<span class='plyr__sr-only'>Toggle Mute</span>", "</button>", "<span class='plyr__volume'>", "<label for='volume{id}' class='plyr__sr-only'>Volume</label>", "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>", "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>", "</span>", "<button type='button' data-plyr='captions'>", "<svg class='icon--captions-on'><use xlink:href='#plyr-captions-on'></use></svg>", "<svg><use xlink:href='#plyr-captions-off'></use></svg>", "<span class='plyr__sr-only'>Toggle Captions</span>", "</button>", "<button type='button' data-plyr='fullscreen'>", "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>", "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>", "<span class='plyr__sr-only'>Toggle Fullscreen</span>", "</button>","</div>"],
    //     fullscreen: {
    //         enabled: false
    //     }
    // });
    var player = new Plyr('#showreel');

    // var controler = [`<div class="control-pad"><button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><div class="plyr_img"><img src="images/video-icon.png"></div><span class="plyr__sr-only">Play</span><h4>Watch Video</h4></button></div> <div class="plyr__controls"> <button type="button" class="plyr__control" data-plyr="restart"> <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg> <span class="plyr__tooltip" role="tooltip">Restart</span> </button> <button type="button" class="plyr__control" data-plyr="rewind"> <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg> <span class="plyr__tooltip" role="tooltip">Rewind{seektime}secs</span> </button> <button type="button" class="plyr__control" aria-label="Play,{title}" data-plyr="play"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span> </button> <button type="button" class="plyr__control" data-plyr="fast-forward"> <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg> <span class="plyr__tooltip" role="tooltip">Forward{seektime}secs</span> </button> <div class="plyr__progress"> <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"> <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress> <span role="tooltip" class="plyr__tooltip">00:00</span> </div><div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div><div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div><button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span> </button> <div class="plyr__volume"> <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"> </div><button type="button" class="plyr__control" data-plyr="captions"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span> </button> <button type="button" class="plyr__control" data-plyr="fullscreen"> <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg> <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg> <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span> <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span> </button></div>`];


    // var player = new Plyr('#showreel', {
    //     controls: controler
    // });












});
