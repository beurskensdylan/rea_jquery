$(document).ready(function(){
	$('.fa-search-plus').on('click', function() {
        $('body').animate({
            fontSize: "+=3"
        }, 600, function() {
            alert('De tekstgrootte is 3px hoger geworden!')
        })
    });
	$('.fa-search-minus').on('click', function() {
        $('body').animate({
            fontSize: "-=3"
        }, 600, function() {
            alert('De tekstgrootte is 3px lager geworden!')
        })
    });
});