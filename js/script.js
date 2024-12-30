setInterval(function() {
    if ($(window).width() < 650) {
        $('.nav').addClass('d-none');
        $('.dropdown').removeClass('d-none');
    } else {
        $('.nav').removeClass('d-none');
        $('.dropdown').addClass('d-none');
    }
}, 1000);