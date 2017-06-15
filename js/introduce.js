$(document).ready(function() {
	$(".btnJoin").unbind("click").bind("click", function() {
		if(new Date().getTime() > 1496246400000) {
			showDialog.showInfoDialog({
				title: " ",
				msgInfo: "活动已结束!"
			});
			return;
		}
		
		window.location="startTest.html" ; 
	});

	$(".btnRule").unbind("click").bind("click", function() {
		$(".overLayer").fadeIn();
		$(".ruleLay").fadeIn();
	});

	$(".btnWap").unbind("click").bind("click", function() {
		$(".overLayer").fadeOut();
		$(".ruleLay").fadeOut();
	});
});