$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    const typed = new Typed(".typed", {
        strings: ["Fullstack developer.", "Networking Tech.", "Freelancer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });





    const skillsTopOffset = $(".skillsSection").offset().top;
    const statsTopOffset = $(".statsSection").offset().top;
    let countUpFinish = false

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }
        if (!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.counter').each(function () {
                const element = $(this)
                const endVal = parseInt(element.text())
                element.countup(endVal)
            })
            countUpFinish = true
        }


    });





});

