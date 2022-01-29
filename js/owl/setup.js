$('.owl-carousel').owlCarousel({
    loop: true,
    center: false,
    margin: 8,
    nav: false,
    dots: false,
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})