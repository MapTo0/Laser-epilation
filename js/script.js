function linkTo() {
    window.location = "index.html";
}
$('[data-role=page]').live('pageshow', function(event, ui) {
        $('#slider').nivoSlider({
            controlNav: false
        });
