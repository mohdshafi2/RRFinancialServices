$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    dots: true,
    pagination: false,
    touchDrag: false,
  		mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})