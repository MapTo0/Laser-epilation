function linkTo() {
    window.location = "index.html";
}
$(window).load(function() {
    $('#slider').nivoSlider({
        controlNav: false
    });
});
$(document).delegate("body", "pageinit", function() {
    $('#slider').nivoSlider({
        controlNav: false
    });
});
