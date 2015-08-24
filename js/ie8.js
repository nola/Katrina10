$(function(){
	$('.no-fouc').removeClass('no-fouc');



	if (!Modernizr.svg) {
	    var imgs = document.getElementsByTagName('img');
	    var svgExtension = /.*\.svg$/
	    var l = imgs.length;
	    for(var i = 0; i < l; i++) {
	        if(imgs[i].src.match(svgExtension)) {
	            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
	            //console.log(imgs[i].src);
	        }
	    }
	}
	$(".footermobilevideo3").click(function(e){
		e.preventDefault();
		$("video").get(1).play();
	});
	$(".footermobilevideo2").click(function(e){
		e.preventDefault();
		$("video").get(2).play();
	});
	$(".footermobilevideo1").click(function(e){
		e.preventDefault();
		$("video").get(3).play();
	});
});
