$(document).ready(function(){
	$('.go').on('click', function() {
        $('.divje').animate({
            marginLeft: "400",
            backgroundColor: "#aa0000"
        }, 400, "linear")
        .delay(100)
        $('.divje').animate({
            marginTop: "400",
            backgroundColor: "#aa00aa"
        }, 400, "linear")
        .delay(100)
        $('.divje').animate({
            marginLeft: "0",
            backgroundColor: "#aaaaaa"
        }, 400, "linear")
        .delay(100)
        $('.divje').animate({
            marginTop: "20",
            backgroundColor: "#d87093"
        }, 400, "linear")
    })
});