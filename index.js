var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.opacity = "1";
    } else {
        // document.getElementById("navbar").style.top = "-10vh";
        document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}

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
});