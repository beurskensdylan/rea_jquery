$(document).ready(function(){
	$('.go').on('click', function() {
        $('.divje').animate({
            width: "800",
        }, 600, "linear")
        $('.divje').animate({
            width: "200",
            marginLeft: "600",
            borderWidth: "20",
            borderRadius: "100"
        }, 600, "linear")
        $('.divje').animate({
            height: "600",
        }, 600, "linear")
        $('.divje').animate({
            height: "600",
            marginLeft: "600",
            borderWidth: "5",
            borderRadius: "0"
        }, 600, "linear")
        $('.divje').animate({
            height: "200",
            marginLeft: "600",
            marginTop: "400",
            borderWidth: "5",
            borderRadius: "0"
        }, 600, "linear")
        $('.divje').animate({
            width: "600",
            marginLeft: "0",
        }, 600, "linear")
        $('.divje').animate({
            width: "200",
            borderWidth: "20",
            borderRadius: "100"
        }, 600, "linear")
        $('.divje').animate({
            width: "200",
            marginTop: "20",
            borderWidth: "5",
            borderRadius: "0"
        }, 600, "linear")
    });

    $('.stop').on('click', function() {
        $('.divje').stop(true);
    });

    $('.reset').on('click', function() {
        $('.divje').animate({
            width: "200",
            height: "200",
            marginTop: "20",
            marginLeft: "0",
            borderWidth: "5",
            borderRadius: "0"
        })
    })
});