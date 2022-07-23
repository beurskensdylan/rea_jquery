$(document).ready(function(){
	$(".vervangen").on('click', function() {
        $('#container > p:last-of-type').html($('#container > p:first-of-type').html());
    });
    $(".omwisselen").on('click', function() {
        let tekst1 = $('#container > p:first-of-type').html();
        let tekst2 = $('#container > p:last-of-type').html();

        $('#container > p:first-of-type').html(tekst2);
        $('#container > p:last-of-type').html(tekst1);
    });
});