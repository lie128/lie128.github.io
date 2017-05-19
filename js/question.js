$(document).ready(function() {
	$(".btnRule").unbind("click").bind("click", function() {
		$(".overLayer").fadeIn();
		$(".ruleLay").fadeIn();
	});

	$(".btnWap").unbind("click").bind("click", function() {
		$(".overLayer").fadeOut();
		$(".ruleLay").fadeOut();
	});
});