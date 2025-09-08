$('.community-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin: 15,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.mob-carousel-01').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.mob-carousel-02').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

jQuery(document).ready(function($){
  let slider = $('.mob-carousel-03');
  slider.each(function () {
    $(this).owlCarousel({
      nav: false,
      loop:true,
      dots: true,
      margin: 0,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 6000,
      autoplaySpeed: 2000,
      autoplayHoverPause: false,
      stagePadding: 50,
      responsive:{
        0:{
          items: 1,
          margin: 15
        },
        600:{
          items: 2,
          margin: 15
        }
      }
    });
  });
});