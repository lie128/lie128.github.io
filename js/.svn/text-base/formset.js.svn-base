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

$("#submit").click(function ajaxpost() {
	//	getcontent
	console.log("ajax执行")
	var openid = getUrl(window.location.href, true).openid;
	localStorage.setItem("openid",openid);

	var name = $("#name").val();
	var industry = $("#industry").val();
	var company = $('#company').val();
	var mail = $('#mail').val();
	var tel = $('#tel').val();

	if(!name || !industry || !company || !mail || !tel){
		alert('信息不能为空');
	}else{
		$.ajax({
			type: "post",
			dataType: "json",
			url: "http://library.geek-scorpion.com/Hesi/setForm",
			data: {
				openid: openid,
				name: name,
				industry: industry,
				company: company,
				mail: mail,
				tel: tel
			},
			success: function(result) {
				console.dir(result);
				console.log("ajax执行完成");
				if(result.code == 1){
					alert('提交成功');
					window.location.href = 'center.html';
				}
			}
		});
	}
});