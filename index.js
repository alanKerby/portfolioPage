$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein').each(function (i) {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_element) {
                $(this).animate({ 'opacity': '1' }, 50);
            }
        });
    });

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("nav").fadeOut();
        } else {
            $("nav").fadeIn();
        }
        lastScrollTop = st;
    });
});

