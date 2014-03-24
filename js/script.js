function linkTo() {
    window.location = "index.html";
}
$(window).load(function() {
    $('#slider').nivoSlider({
        controlNav: false
    });
});
(function($) {
    $(window).load(function() {
        $("section").mPageScroll2id();
    });
})(jQuery);
