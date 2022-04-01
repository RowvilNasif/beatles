(function() {
    $('#fade').click(function() {
        $('#box').fadeToggle(700);
    });


    $(document).ready(function() {
        $(".beatle-service-slick").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            arrows: true,
            prevArrow: $(".previous-service"),
            nextArrow: $(".next-service"),
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ],
        });
    });


    $(document).ready(function() {
        $('.beatle-testimonial-slick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
        })
    });
})()