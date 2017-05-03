window.onload  =   function() {
	var  colheight  =  $(window).height(); 
	document.getElementById("wrapper").style.height = colheight + "px";
	
	var enter = document.getElementById("enter");
	var footer = document.getElementById("footer");

	var notFirst = window.localStorage.getItem('notFirst');
	if(!notFirst){
		enter.style.display = "block";
		footer.style.display = "none";
		setTimeout(function(){
			footer.style.display = "block";
			enter.style.display = "none";
		},2000);
		window.localStorage.setItem('notFirst',true);
	}
};
