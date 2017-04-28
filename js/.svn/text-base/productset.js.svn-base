$(document).ready(function() {
	console.log("开始加载");
	var categoryid = getUrl(window.location.href, true).categoryid;
	var superid = getUrl(window.location.href,true).superid;
	$.ajax({
		type: "post",
		url: "http://library.geek-scorpion.com/Hesi/findArticle",
		dataType: "json",
		data: {
			category: categoryid,
			superid: superid
		},
		success: function(result) {
			console.dir(result);
			if (result.code == -2) {
				console.log("查找失败");
			} else if (result.code == -1) {
				console.log("文章不存在");
			} else {
				var i;
				for (i = 0; i < result.data.length; i++) {
					var now = i % 9;
					switch (i) {
						case 0:
							$("#section").append("<a href='showcontent.html?articleid="+result.data[i].id+"'><div class='product ma-left colorful1'>" + result.data[i].title + "</div></a>");
							break;
						case 1:
							$("#section").append("<a href='showcontent.html?articleid="+result.data[i].id+"'><div class='product colorful2'>" + result.data[i].title + "</div></a>");
							break;
						case 2:
							$("#section").append("<a href='showcontent.html?articleid="+result.data[i].id+"'><div class='product ma-right colorful3'>" + result.data[i].title + "</div></a>");
							break;
						case 3:
							$("#section").append("<a href='showcontent.html?articleid="+result.data[i].id+"'><div class='product ma-left colorful4'>" + result.data[i].title + "</div></a>");
							break;
						case 4:
							$("#section").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='product colorful5'>" + result.data[i].title + "</div></a>");
							break;
						case 5:
							$("#section").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='product ma-right colorful6'>" + result.data[i].title + "</div></a>");
							break;
						case 6:
							$("#section").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='product ma-left colorful7'>" + result.data[i].title + "</div></a>");
							break;
						case 7:
							$("#section").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='product colorful8'>" + result.data[i].title + "</div></a>");
							break;
						case 8:
							$("#section").append("<a href='showcontent.html?articleid=" + result.data[i].id + "'><div class='product ma-right colorful9'>" + result.data[i].title + "</div></a>");
							break;
					}
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