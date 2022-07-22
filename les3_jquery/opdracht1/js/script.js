$(document).ready(function(){
	$(".vervangen").on('click', function() {
        $('#container > p:last-of-type').html($('#container > p:first-of-type').html());
    });
    $(".omwisselen").on('click', function() {
        $('#container > p:first-of-type').before($('#container > p:last-of-type'));
    });
});