$(document).ready(function(){
	$("button").on("click", function(){
		$("img").hide(1000);
		$("img").show(1000);
		$("img").slideUp(1000);
		$("img").slideDown(1000);
		$("img").fadeOud(1000);
		$("img").fadeIn(1000);		
	});
});