$(document).ready(function(){
    $('.dbz').on('dblclick', function() {
        $(this).attr('src', 'images/vegeta.gif');
        $(this).attr('width', '500');
        $(this).attr('height', '393');
        $(this).attr('alt', 'Vegeta');
        $(this).attr('title', 'Vegeta powering up');
        $(this).addClass('darkBlue');
    });

    $('.reset').on('click', function() {
        $('.dbz').attr('src', 'images/goku.gif');
        $('.dbz').attr('width', '540');
        $('.dbz').attr('height', '291');
        $('.dbz').attr('alt', 'Goku');
        $('.dbz').attr('title', 'Goku Powering up');
        $('.dbz').removeClass('darkBlue');
    })
});