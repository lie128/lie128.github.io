$(document).ready(function(){
	$.ajax({
		type:"post",
		url:"http://library.html5case.cn/Hesi/getMessage",
		dataType:"json",
		data:{
			openid : localStorage.getItem("openid")
		},
		success:function(result){
			console.dir(result);

			if(result.code == -1){
				alert("访问失败");
			}else if(result.code == 1){
				for(i = 0;i< result.data.length;i++){
					if(!result.data[i].replay){
						result.data[i].replay = '';
					}
					$("#message-board").append("<div class='message'><h3>"+ result.data[i].content + "</h3><p>   回复：" +
						result.data[i].replay+ "</p></div>");
				}
			}
		}
	});
	
});
