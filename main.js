$(document).ready(function() {
	reset();
	
	window.onresize = function(event) {
    	reset();
	}
});

function reset() {
	$(".block").css("height", $(window).height());
	$(".block").css("background-size", $(window).width() + "px " + $(window).height() + "px");
}