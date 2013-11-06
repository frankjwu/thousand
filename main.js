$(document).ready(function() {
	reset();
	$(".main").onepage_scroll({
		sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 1000, // AnimationTime let you define how long each section takes to animate
		pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
		loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		responsiveFallback: false // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
	});

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
	$(".content").css("padding-top", 0.2 * $(window).height() + "px");
	$("#c1").css("font-size", 66 * ($(window).width() / 1200) + "px");
	$("#c2").css("font-size", 60 * ($(window).width() / 1200) + "px");
	$("#c3").css("font-size", 50 * ($(window).width() / 1200) + "px");
	$("#c3 .gobig").css("font-size", 80 * ($(window).width() / 1200) + "px");
	$("#c3 .disclosure").css("font-size", 24 * ($(window).width() / 1200) + "px");
}