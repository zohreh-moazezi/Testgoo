$(document).ready(function () {
    function slider(md_lg_screen = 3, sm_screen = 2, xs_screen = 1, time = 2500) {
        //number of mainSlides of differnt screens with slide show time
        var sliderItem = $(".slider-item"),
            sliderContainer = $(".slider-container"),
            sliderContent = $(".slider-content"),
            nextBtn = $(".slider-container .right"),
            prevBtn = $(".slider-container .left"),
            mainSlides = md_lg_screen,
            trackBtn,
            clicked = false;

        function checkScreenSize() {
            if ($(window).width() <= 991 && $(window).width() > 550) {
                mainSlides = sm_screen;
            } else if ($(window).width() <= 550) {
                mainSlides = xs_screen;
            } else {
                mainSlides = md_lg_screen;
            }
            trackBtn = mainSlides; //first trackbtn will have mainSlides number
        }
        checkScreenSize();

        function fixWidth() {
            sliderItem.css("width", "calc(100% / " + mainSlides + ")");
            sliderContent.height(sliderItem.height());
        }
        fixWidth();

        $(window).resize(function () {
            checkScreenSize();
            fixWidth();
            sliderContent.css("left", "0");
            sliderContent.css("width", "100%");
            sliderItem.css("width", "calc(100% / " + mainSlides + ")");
        });

        nextBtn.click(function () {
            if (clicked == false) {
                clicked = true;
                if (mainSlides < sliderItem.length) {
                    leftValue = parseInt(sliderContent.css("left")) - sliderItem.outerWidth();
                    sliderContent.animate({
                        left: leftValue
                    }, 500);
                    sliderContent.css("width", parseInt(sliderContent.css("width")) + sliderItem.outerWidth());
                    mainSlides++;
                    fixWidth();
                }
                setTimeout(function () {
                    clicked = false
                }, 500);
            }
        });

        prevBtn.click(function () {
            if (clicked == false) {
                clicked = true;
                if (trackBtn < mainSlides) { // mainSlides increase onclick nextBtn
                    leftValue = parseInt(sliderContent.css("left")) + sliderItem.outerWidth();
                    sliderContent.animate({
                        left: leftValue
                    }, 500, function () {
                        sliderContent.css("width", parseInt(sliderContent.css("width")) - sliderItem.outerWidth());
                        mainSlides--;
                        fixWidth();
                    });
                }
                setTimeout(function () {
                    clicked = false
                }, 500);
            }
        });

        var timer;
        function slideShow() {
            timer = setInterval(function () {
                if (mainSlides < sliderItem.length) {
                    nextBtn.click();
                } else {
                    sliderContent.animate({
                        left: 0
                    }, 500, function () {
                        checkScreenSize();
                        sliderContent.css("width", "100%");
                        sliderItem.css("width", "calc(100% / " + mainSlides + ")");
                    });
                }
            }, time);
        }
        slideShow();

        sliderContainer.mouseover(function () {
            clearInterval(timer);
        });
        sliderContainer.mouseleave(function () {
            slideShow();
        });
    }

    slider();
});

/*line*/
var init = function(){
    var canvas = document.getElementById('canvas');

    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(200,200);
    context.stroke();
};

window.addEventListener('load',init,false);
/* humberger menu*/
$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});