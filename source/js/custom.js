/*=====================================================================================
                            $(document).ready(function()
======================================================================================*/

$(window).on('load', function () {
    $('[data-wy], [data-wyanim]').waypoint({
        handler: function () {
            $(this.element).addClass("wy-anim")
        },
        offset: '90%'
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

            $(function () {

                var crsl = $('#carouselExampleControls'),
                    playpause = $('.playpause-btn');
                $('#carouselExampleControls').on('slide.bs.carousel', function () {
                    kojo = 0;
                    isPaused = false;
                    playpause.attr('data-play', 'on');
                    crsl.carousel('cycle');
                    update();
                });
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

    var forEach = function (collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === '[object Object]') {
            for (var prop in collection) {
                if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                    callback.call(scope, collection[prop], prop, collection);
                }
            }
        } else {
            for (var i = 0, len = collection.length; i < len; i++) {
                callback.call(scope, collection[i], i, collection);
            }
        }
    };

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



    /*----------------------- Acadamics Slide Ends ------------------------*/

    (function () {
        'use strict';

        var module = {
            book: [
                { state: true },
                { intialwidth: 670 },
                { intialheight: 380 },
            ],
            ratio: 1.76,
            init: function (id) {
                var me = this;
                // if older browser then don't run javascript
                if (document.addEventListener) {
                    this.el = id;
                    // this.el = document.getElementsByClassName(id)[0];
                    this.resize();
                    this.plugins();
                    this.responsive();

                    // on window resize, update the plugin size
                    window.addEventListener('resize', function (e) {
                        var size = me.resize();
                        $(me.el).turn('size', size.width, size.height);
                    });
                }
            },
            resize: function () {

                // if the height is too big for the window, constrain it
                if (this.book.state == true) {
                    var width = this.el.parentNode.clientWidth,
                        height = Math.round(this.book.intialheight + (this.book.intialheight * (1 - (width / this.book.intialwidth))));
                } else {
                    if (height > padded) {
                        height = padded;
                        width = Math.round(height * this.ratio);
                    } else {
                        var width = this.el.parentNode.clientWidth,
                            height = Math.round(width / this.ratio),
                            padded = Math.round(document.body.clientHeight * 0.9);
                    }
                }

                // set the width and height matching the aspect ratio
                this.el.style.width = width + 'px';
                this.el.style.height = height + 'px';

                return {
                    width: width,
                    height: height
                };
            },
            plugins: function () {
                // run the plugin
                $(this.el).turn({
                    autoCenter: true,
                    gradients: true,
                    acceleration: true
                });
            },
            responsive: function () {
                if (window.innerWidth < 575) {
                    $(this.el).turn('display', 'single');
                }
            },
            bookprev: function () {
                $(this.el).turn('previous');
            },
            booknext: function () {
                $(this.el).turn('next');
            },
            waypoint: function () {
                $(this.el).turn("next");
            }
        };


        [].slice.call(document.querySelectorAll('.feacourse-book')).forEach(function (inputEl) {
            module.init(inputEl);
        });
        // module.init('feacoursebookinit');

        $('.feacourse-btn .turn-prev').on('click', function () {
            module.bookprev();
        });
        $('.feacourse-btn .turn-next').on('click', function () {
            module.booknext();
        });
        $('.feabook-sldr').waypoint({
            handler: function () {
                // module.waypoint();
                $('.feacourse-book').turn("next");
                this.destroy()
            },
            offset: '80%'
        });
    }());

    $('.feacoursebookinit').bind('start', function (e, data, c) {
        var $this = $(this);
        if (data.next == 2) {
            $this.addClass('cover-anim');
        } else {
            $this.removeClass('cover-anim');
        }
    });

    // $('.feacourse-btn .turn-prev').on('click', function () {
    //     turnbook.turn('previous');
    // });

    // $('.feacourse-btn .turn-next').on('click', function () {
    //     turnbook.turn('next');
    // });




    $('.feabook-sldr').slick({
        slidesToShow: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        draggable: false,
        arrows: true,
        appendArrows: $('.feacourse-mn .mn-h2 span')
    });

    /*----------------------- Acadamics Slide Ends ------------------------*/



    /*----------------------- Acadamics Slide Ends ------------------------*/

    $('.pglifesaha-sldr').slick({
        slidesToShow: 6,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.pglifethumb-sldr').slick({
        slidesToShow: 3,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: true,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.pgstudentsay-sldr'
    });

    $('.pgstudentsay-sldr').slick({
        slidesToShow: 1,
        dots: false,
        nav: false,
        // fade: true,
        arrows: false,
        asNavFor: '.pglifethumb-sldr'
    });


    $('.pgcampusdet-sldr').slick({
        slidesToShow: 3,
        rows: 2,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: true,
        appendArrows: $(".pgcampus-cont h2 span")
    });


    $('.pgnews-sldr').slick({
        slidesToShow: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        pauseOnHover: true,
        nav: true,
        arrows: true,
        appendArrows: $(".pgnews-det h3 span")
    });

    /*----------------------- Acadamics Slide Ends ------------------------*/


    /*----------------------- Thumnail Slider Ends ------------------------*/

    // $('.pgrecruters-sldr').slick({
    //     speed: 3000,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     cssEase: 'linear',
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     arrows: true,
    //     pauseOnHover: false,
    //     draggable: false,
    //     appendArrows: $(".pgrecruters-mn h2 span")
    // });

    /*----------------------- Thumnail Slider Starts ------------------------*/


    $('.pggalmn-sldr').slick({
        slidesToShow: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true,
        nav: true,
        arrows: true,
        appendArrows: $(".pggalmnsldr-h3 span"),
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
        arrows: true,
        appendArrows: $(".pggalnewssldr-h3 span"),
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

    var _countList = document.querySelectorAll('.pgcounter-bx span');

    var countAnimation = (function () {

        var startCount = function () {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: '',
                decimal: '.',
            };
            var options2 = {
                useEasing: true,
                useGrouping: true,
                separator: '',
                decimal: '.',
                prefix: '0',
            };
            forEach(_countList, function (value, index) {
                var endValue = _countList[index].textContent;
                if (_countList[index].className == 'pgcounter-prefix') {
                    var demo = new CountUp(value, 0, endValue, 0, 5, options2);
                } else if (_countList[index].className == 'pgcounter-decimal') {
                    var demo = new CountUp(value, 0, endValue, 2, 5, options);
                } else {
                    var demo = new CountUp(value, 0, endValue, 0, 5, options);
                }
                demo.start();
            });
        };
        return {
            startCount: startCount
        };

    })();

    $('.pgcounter-mn').waypoint({
        handler: function (direction) {
            if (direction === 'down') {
                countAnimation.startCount()
            }
            this.destroy()
        },
        offset: '80%'
    });


    // /*----------------------- Ripple Effect Light Ends ---------------------------*/


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

    const controls = `
    <div class="control-pad"><button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><div class="plyr_img"><img src="images/video-icon.png"></div><span class="plyr__sr-only">Play</span><h4><span>Play</span>Watch <em>Campus Life 360</em> Video Tour</h4></button></div>
    <div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="restart">
        <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Restart</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="rewind">
        <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
    </button>
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fast-forward">
        <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
    </button>
    <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
    </button>
    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
    <button type="button" class="plyr__control" data-plyr="captions">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
    </button>
</div>
`;

    var player = new Plyr('#showreel', {
        controls
    });


});
