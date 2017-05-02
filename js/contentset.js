$("document").ready(function() {
	console.log("开始加载");
	var articleid = getUrl(window.location.href, true);
	//分享
	var shareImgUrl = "http://hesi.html5case.cn/img/share.jpg";
	var shareLinkUrl = window.location.href;
	var shareTitle = window.localStorage.getItem('shareTitle');
	var shareDesc = "未来，不等待";
	var url = encodeURIComponent(window.location.href);
	$.ajax({
		type: "post",
		url: "http://library.html5case.cn/Hesi/findArticle",
		dataType: "json",
		data: {
			id: articleid['articleid']
		},
		success: function(result) {
			console.dir(result);
			if (result.code == -1) {
				console.log("文章不存在");
			} else if (result.code == -2) {
				console.log("查找失败");
			} else {
				shareTitle = result.data[0].title;
				$(".content").append("<div class='title'><h3>" + result.data[0].title + "</h3></div>");
				$(".content").append("<div class='date'><h5>" + result.data[0].createTime + "</h5><h5>" + result.data[0].author + "</h5></div><div class='clearfix'></div>");
				$(".content").append("<div class='text'><p>" + result.data[0].body + "</p></div>");
				$(".content").append("<div style='width: 100%;height: 100px;'></div>");
				window.localStorage.setItem('shareTitle',result.data[0].title);
			}

			var winHeight = $('.wrapper').height();
			console.log(winHeight);
			//$('.wrapper').height(winHeight+100);
			//配置
			$.ajax({
				type : "post",
				dataType : "json",
				url : "http://library.html5case.cn/Hesi/jssdk",
				data:{
					url:url
				},
				success : function(result){
					console.dir(result);
					callback(result);
				}
			});
			function callback(config){
				wx.config(config);
				wx.ready(function(){
					wx.onMenuShareAppMessage({
						title: shareTitle,
						desc: shareDesc,
						link: shareLinkUrl,
						imgUrl: shareImgUrl,
						success: function (res) {
						}
					});
					wx.onMenuShareTimeline({
						title: shareDesc,
						link: shareLinkUrl,
						imgUrl: shareImgUrl,
						success: function (res) {
						}
					});
				});
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