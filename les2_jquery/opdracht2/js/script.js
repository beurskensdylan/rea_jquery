$(document).ready(function(){
	$("button").on("click", function(){
		let time = 0;
		$(".block").each(function() {
			$(this).delay(time).slideToggle(2000);
			time += 500;
		})
	});
});