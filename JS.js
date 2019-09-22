$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#topbutton').addClass('show');
    } else {
        $('#topbutton').removeClass('show');
    }
});
$('#topbutton').click(function() {
    $('html, body').animate({
        scrollTop: 0 
    }, 500);
    });
$('.scroll').click(function() {
    $('html, body').animate({
        scrollTop: $("#sveciunamai").offset().top
    }, 500);
});
$('.scroll2').click(function() {
    $('html, body').animate({
        scrollTop: $("#kambariai").offset().top
    }, 500);
});
$('.scroll3').click(function() {
    $('html, body').animate({
        scrollTop: $("#kontaktai").offset().top
    }, 500);
});
function initMap() {
    var akmuo = {lat: 56.030376, lng: 21.080420};
    // The map, centered at akmuo
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: akmuo});
    // The marker, positioned at akmuo
    var marker = new google.maps.Marker({position: akmuo, map: map});
  }