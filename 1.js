$(document).ready(function() {

    $(".service-slide").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        items: 4,
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 4 },
            1200: { items: 4 }
        }
    
    });
    
    });

    $(document).ready(function() {

        $(".image-slide").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 },
                480: { items: 1 },
                575: { items: 1 },
                768: { items: 1 },
                991: { items: 1 },
                1200: { items: 1 }
            }
        
        });
        
        });

        $(document).ready(function() {

            $(".Carousel").owlCarousel({
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
                items: 1,
                nav: false,
                dots: true,
                loop: true,
                responsive: {
                    0: { items: 1 },
                    480: { items: 1 },
                    575: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1200: { items: 1 }
                }
            
            });
            
            });
    
             function reveal() {
                var reveals = document.querySelectorAll(".reveal");
              
                for (var i = 0; i < reveals.length; i++) {
                  var windowHeight = window.innerHeight;
                  var elementTop = reveals[i].getBoundingClientRect().top;
                  var elementVisible = 100;
              
                  if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                  } else {
                    reveals[i].classList.remove("active");
                  }
                }
              }
              
              window.addEventListener("scroll", reveal);

             

  
