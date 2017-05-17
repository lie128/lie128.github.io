var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var radius = 50;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var clippingRegion = {
	x: -1,
	y: -1,
	r: radius
}
image.src = "img_blur/duola.jpg";
image.onload = function(e) {

	$("#blur-div").css("width", canvasWidth + "px")
	$("#blur-div").css("height", canvasHeight + "px");
	
	$("#blur-img").css("width",image.width +"px");
	$("#blur-img").css("height",image.height + "px");
	
	initCanvas();
}

function initCanvas() {
	clippingRegion = {
		x: Math.random() * (canvasWidth - 2 * radius) + radius,
		y: Math.random() * (canvasHeight - 2 * radius) + radius,
		r: radius
	}
	draw(image, clippingRegion);
}

function setClippingRegion(clippingRegion) {
	context.beginPath();
	context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
	context.clip();
}

function draw(image, clippingRegion) {
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.save();
	setClippingRegion(clippingRegion);
	context.drawImage(image, 0, 0);
	context.restore();
}

function reset() {
	initCanvas();
}

function show() {

	var theAnimation = setInterval(
		function() {
			console.log("animation");

			clippingRegion.r += 20;
			if(clippingRegion.r > 2 * Math.max(canvas.width, canvas.height)) {
				clearInterval(theAnimation);
			}
			draw(image, clippingRegion);
		},
		30
	)

}