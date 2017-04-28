$("#submit").click(function(){
	var id = localStorage.getItem("openid");
	
	$.ajax({
		type:"post",
		url:"http://library.html5case.cn/Hesi/setMessage",
		dataType:"json",
		data:{
			openid:id,
			content:$('#messageBody').val()
		},
		success:function(result){
			console.dir(result);
			
			if(result.code == -1){
				alert("留言失败!");
			}else if(result.code == 1){
				alert("留言成功!");
				window.location.href = "http://hesi.html5case.cn/contactus.html";
			}
		}
	});
});
