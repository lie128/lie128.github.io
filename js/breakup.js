window.onload = function(){
	var products = document.getElementsByClassName("product");
	
	var i;
	for(var i = 0;i<products.length;i++){
		var str = products[i].innerHTML;
		if(str.indexOf(" ") != -1){
			var a = str.indexOf(" ");
			products[i].innerHTML = str.substring(0,a) + "</br>" + str.substring(a+1,str.length);
		}else{
			products[i].innerHTML = str.substring(0,4) + "</br>" + str.substring(4,str.length);
		}
	}

//	getheight
	var  colheight  =  $(window).height();
	document.getElementById("wrapper").style.height = colheight + "px";

}
