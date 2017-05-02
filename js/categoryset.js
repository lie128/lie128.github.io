$(document).ready(function() {
	console.log("加载执行");
	var superid = getUrl(window.location.href, true).superid;
	$.ajax({
		type: "post",
		url: "http://library.html5case.cn/Hesi/getCategory",
		data: {
			super: superid
		},
		dataType: "json",
		success: function(result) {
			console.dir(result);
			if(result.code == 1) {
				var i;
				var htmlStrTop = "<div class='list-group-item text-center list_item_top' style='background-color: transparent; color: white; padding: 25px 0px;'>";
				var htmlStr = "<div class='list-group-item text-center list_item' style='background-color: transparent; color: white; padding: 25px 0px;'>";
				for(i = 0; i < result.data.length; i++) {
					if( i == 0 ){
						$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid + "'>" + htmlStrTop + result.data[i].title + "</div></a>");
					}else{
						$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid + "'>" + htmlStr + result.data[i].title + "</div></a>");
					}
					
					/*var now = i % 9;
					switch (now) {
						case 0:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-left colorful1'>" + result.data[i].title + "</div></a>");
							break;
						case 1:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product colorful2'>" + result.data[i].title + "</div></a>");
							break;
						case 2:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-right colorful3'>" + result.data[i].title + "</div></a>");
							break;
						case 3:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-left colorful4'>" + result.data[i].title + "</div></a>");
							break;
						case 4:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product colorful5'>" + result.data[i].title + "</div></a>");
							break;
						case 5:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-right colorful6'>" + result.data[i].title + "</div></a>");
							break;
						case 6:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-left colorful7'>" + result.data[i].title + "</div></a>");
							break;
						case 7:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product colorful8'>" + result.data[i].title + "</div></a>");
							break;
						case 8:
							$("#section").append("<a href='article.html?categoryid=" + result.data[i].id + "&superid=" + superid +"'><div class='product ma-right colorful9'>" + result.data[i].title + "</div></a>");
							break;
					}*/
				}
			}
		}
	});
});

function getUrl(url, isEncode) {
	url = url || window.location.href;
	var obj = {},
		reg = /([^?&=]+)=([^?&=]+)/g;
	url.replace(reg, function() {
		var arg = arguments;
		obj[arg[1]] = isEncode ? decodeURIComponent(arg[2]) : arg[2];
	});
	return obj;
}