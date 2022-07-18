$(document).ready(function(){
	$("button").on("click", function(){
		$("img")
		.hide(1000)
		.show(1000)
		.delay(2000)
		.slideUp(1000)
		.slideDown(1000)
		.delay(2000)
		.fadeOut(1000)
		.fadeIn(1000);		
	});
});