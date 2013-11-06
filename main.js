$(document).ready(function() {
	reset();

	window.onresize = function(event) {
    	reset();
	}
});

function reset() {
	$(".block").css("height", $(window).height());
	$(".block").css("background-size", $(window).width() + "px " + $(window).height() + "px");
	$("#b1").css("top", 0.9 * $(window).height() + "px");
	$("#b2").css("top", 1.9 * $(window).height() + "px");
	$(".content").css("padding", 0.05 * $(window).height() + "px");
	$("#c1").css("padding-top", 0.20 * $(window).height() + "px");
}