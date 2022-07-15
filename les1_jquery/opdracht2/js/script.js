$(Document).ready(function() {
    $('#block-1').on('click', function() {
        $(this).hide();
    });
    $('#block-2').on('dblclick', function() {
        alert('Alert!');
        $(this).hide();
    });
    $('#block-3').on('mouseover', function() {
        alert('Alert!');
       ;
    });
    $('#block-3').on('mouseleave', function() {
        $(this).hide();
    });
    $('#block-4').on('click', function() {
        $("#block-5").hide();
    });
    $('#block-5').on('click', function() {
        $("#block-4").hide();
    });
})