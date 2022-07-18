$(document).ready(function(){
	let time = 0;
	$("button").on("click", function(){
		$(".block").each(function() {
		time += 500;
		setTimeout(() => {
			$(this).slideToggle(2000);
		})
		}, time)
	});
});