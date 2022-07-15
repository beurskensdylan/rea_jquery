$(Document).ready(function() {
    $('section:first-of-type .row-1:first-of-type').on('click', function() {
        $('section:last-of-type .row-1').hide();
    });
    $('section:first-of-type .row-1:nth-child(2)').on('click', function() {
        $('section:last-of-type .row-1').show();
    });
    $('section:first-of-type .row-2').on('click', function() {
        $('section:last-of-type .row-2').toggle();
    });
    $('section:first-of-type .row-3:first-of-type').on('click', function() {
        $('section:last-of-type .row-3').slideUp(1000);
    });
    $('section:first-of-type .row-3:nth-child(2)').on('click', function() {
        $('section:last-of-type .row-3').slideDown(1000);
    });
})