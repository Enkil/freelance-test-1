// Init owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        nav: true,
        dots:false,
        items: 1,
        //animateOut: 'slideInLeft',
        //animateIn: 'slideInRight',
        navText: [
            "<img class='slider__btn' src='img/images/slider-btn.png'>",
            "<img class='slider__btn slider__btn--next' src='img/images/slider-btn.png'>"
        ]
    });
});