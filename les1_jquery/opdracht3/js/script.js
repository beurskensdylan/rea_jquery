$(document).ready(function() {
    $('section:first-of-type .row-1:first-of-type').on('click', function() {
        $('section:last-of-type .row-1').hide();
    });
    $('section:first-of-type .row-1:nth-child(2)').on('click', function() {
        $('section:last-of-type .row-1').show();
    });
    $('section:first-of-type .row-2').on('click', function() {
        $('section:last-of-type .row-2').toggle();
    });
    $('section:first-of-type button:nth-child(4)').on('click', function() {
        $('section:last-of-type .row-3').slideUp(1000);
    });
    $('section:first-of-type button:nth-child(5)').on('click', function() {
        $('section:last-of-type .row-3').slideDown(2000);
    });
    $('section:first-of-type button:nth-child(6)').on('click', function() {
        $('section:last-of-type .row-4').slideToggle(800);
    });
    $('section:first-of-type button:nth-child(7)').on('click', function() {
        $('section:last-of-type .row-5').fadeOut(1200);
    });
    $('section:first-of-type button:nth-child(8)').on('click', function() {
        $('section:last-of-type .row-5').fadeIn(900);
    });
    $('section:first-of-type button:nth-child(9)').on('click', function() {
        $('section:last-of-type .row-6').fadeToggle(1800);
    });
    $('section:first-of-type button:nth-child(10)').on('click', function() {
        $('section:last-of-type .row-7').fadeTo(500, 0.5);
    });
    $('section:first-of-type button:nth-child(11)').on('click', function() {
        $('section:last-of-type .row-7').fadeTo(500, 1.0);
    });
})