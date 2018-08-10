$(document).ready(function () {

    //Navigation Click
    $('.navbar .nav li a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
        $('.navbar-collapse').collapse('hide');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 300);
    });

    //Navigation Scroll
    $("body").scrollspy({
        target: ".navbar",
        offset: 60
    })

});