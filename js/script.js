function linkTo() {
    window.location = "index.html";
}
$(window).load(function() {
    $('#slider').nivoSlider({
        controlNav: false
    });
});
$(document).delegate("body", "pageinit", function() {
    var url = window.location.search.substring(1);
    $('#slider').nivoSlider({
        controlNav: false
    });
});
