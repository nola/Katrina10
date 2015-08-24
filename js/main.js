var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var forceBtn = ".forceBtn";
var vidBtn = ".vidBtn";
var augBtn = ".augBtn";
var destructionBtn = ".destructionBtn";
var rebirthBtn = ".rebirthBtn";
var thankYouBtn = ".thankYouBtn";
var aboutBtn = ".aboutBtn";
var la = "la";
var ms = "ms";
var al = "al";

$(function(){
	$('.no-fouc').removeClass('no-fouc');
	// TweenMax.set("#footerVideoPopUp", {autoAlpha:0})

	// PREVENT 'CONSOLE' ERRORS IN BROWSERS THAT LACK A CONSOLE.
	function nerfConsole () {
		if ( !(window.console && window.console.log) ) {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}
	}


	$('video').each(function (i,ele) { ele.pause(); ele.volume = 0.5; });

	TweenMax.set(".web-box",{perspective:1000});

	$("video").get(0).addEventListener('ended', videoEnded, false);

	$("#clickNav ul li a, .mobile-nav ul li a").on({
		click: function (e){
			e.preventDefault();
			var clickHash = this.hash.slice(1);
			$("video").get(0).pause();
			$("video").get(1).pause();
			$("video").get(2).pause();
			$("video").get(3).pause();
			$().colorbox.close();
			closeAllStates();
			master.pause();
			master.seek(clickHash);
			master.play();
			if(!!isMobile){
				hide_mobile_nav();
			}
		}
	});

	$(".press-link-click").on({
		click: function (e){
			e.preventDefault();	
			master.seek("breakpoint6").play();
		}
	});

	$(".playbtn a").click(function(e){
		e.preventDefault();
		master.seek("breakpoint1");
		$("video").get(0).play();
	});

	//scrollAttentionGrabber click functionality
	$("#scrollIndicator a").click(function(e){
		e.preventDefault();
		$("video").get(0).pause();
		if(master.getLabelBefore() == "start"){
			master.seek("breakpoint2");
		} else if (master.getLabelBefore() == "breakpoint2") {
			master.seek("breakpoint3");
		} else if (master.getLabelBefore() == "breakpoint3"){
			master.seek("breakpoint4");
		} else if (master.getLabelBefore() == "breakpoint4"){
			master.seek("breakpoint5");
		} else if (master.getLabelBefore() == "breakpoint5"){
			master.seek("breakpoint6");
		} else if (master.getLabelBefore() == "breakpoint6"){
			master.seek("breakpoint7");
		} else if (master.getLabelBefore() == "breakpoint7"){
			master.seek("breakpoint8");
		} else if (master.getLabelBefore() == "breakpoint8" && !!isMobile){
			master.seek("louisianastart");
		} else if (master.getLabelBefore() == "louisianastart" && !!isMobile){
			master.seek("missstart");
		} else if (master.getLabelBefore() == "missstart" && !!isMobile){
			master.seek("alastart");
		} else if (master.getLabelBefore() == "alastart" && !!isMobile){
			master.seek("threepackvideos");
		} else if (master.getLabelBefore() == "threepackvideos" && !!isMobile){
			master.seek("breakpoint9");
		} else if (master.getLabelBefore() == "breakpoint8"){
			master.seek("breakpoint9");
		}  else {
			master.play();
		}
		//console.log(master.getLabelAfter());
		
	});


	if(!isMobile){
		//LA
		TweenMax.set("#SVGID_3_ stop:nth-child(1)",{attr:{offset:'1'},stopColor:'#212121'})
		TweenMax.set("#SVGID_3_ stop:nth-child(2)",{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)
		TweenMax.set("#LA", {stroke:"#656565"})

		//MS
		TweenMax.set("#SVGID_4_ stop:nth-child(1)",{attr:{offset:'1'},stopColor:'#212121'})
		TweenMax.set("#SVGID_4_ stop:nth-child(2)",{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)
		TweenMax.set("#MS", {stroke:"#656565"})

		//AL
		TweenMax.set("#SVGID_5_ stop:nth-child(1)",{attr:{offset:'1'},stopColor:'#212121'})
		TweenMax.set("#SVGID_5_ stop:nth-child(2)",{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)
		TweenMax.set("#AL", {stroke:"#656565"})

		$( "#map svg #MS, #map svg #SVGID_4_").on({
			mousedown: function() {
				//closeAllStates()
				loadPopUp(ms)
				TweenMax.to("#map svg", 1, {scale:1.3, transformOrigin:"50% 20%", ease:Power1.easeInOut})
				ga('send', 'event', 'Map', 'Click', 'Mississippi');
			}, mouseenter: function() {

				TweenMax.to("#SVGID_4_ stop:nth-child(1)",1,{attr:{offset:'0'},stopColor:'#212121'})
				TweenMax.to("#SVGID_4_ stop:nth-child(2)",1,{attr:{offset:'1'},stopColor:'#006175',stopOpacity:1},0)

				TweenMax.to("#MS", 1, {stroke:"#00b9df"})
				this.parentNode.appendChild(this); 
				//TweenMax.to(".mstext", 1, {fill:"#00b9df"})
			}, mouseout: function() {

				TweenMax.to("#SVGID_4_ stop:nth-child(1)",1,{attr:{offset:'1'},stopColor:'#212121'})
				TweenMax.to("#SVGID_4_ stop:nth-child(2)",1,{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)

				TweenMax.to("#MS", 1, {stroke:"#656565"})
				//TweenMax.to(".mstext", 1, {fill:"#4D4D4D"})
			}
		});

		$( "#map svg #LA, #map svg #SVGID_3_").on({
			mousedown: function() {
				//closeAllStates()
				loadPopUp(la)
				TweenMax.to("#map svg", 1, {scale:1.3, transformOrigin:"20% 50%", ease:Power1.easeInOut})
				ga('send', 'event', 'Map', 'Click', 'Louisiana');
			}, mouseenter: function() {

				TweenMax.to("#SVGID_3_ stop:nth-child(1)",1,{attr:{offset:'0'},stopColor:'#212121'})
				TweenMax.to("#SVGID_3_ stop:nth-child(2)",1,{attr:{offset:'1'},stopColor:'#006175',stopOpacity:1},0)

				TweenMax.to("#LA", 1, {stroke:"#00b9df"})
				this.parentNode.appendChild(this); 
				//TweenMax.to(".latext", 1, {fill:"#00b9df"})
			}, mouseout: function() {

				TweenMax.to("#SVGID_3_ stop:nth-child(1)",1,{attr:{offset:'1'},stopColor:'#212121'})
				TweenMax.to("#SVGID_3_ stop:nth-child(2)",1,{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)

				TweenMax.to("#LA", 1, {stroke:"#656565"})
				//TweenMax.to(".latext", 1, {fill:"#4D4D4D"})
			}
		});

		$( "#map svg #AL, #map svg #SVGID_5_").on({
			mousedown: function() {
				//closeAllStates()
				loadPopUp(al)
				TweenMax.to("#map svg", 1, {scale:1.3, transformOrigin:"80% 20%", ease:Power1.easeInOut})
				ga('send', 'event', 'Map', 'Click', 'Alabama');
			}, mouseenter: function() {

				TweenMax.to("#SVGID_5_ stop:nth-child(1)",1,{attr:{offset:'0'},stopColor:'#212121'})
				TweenMax.to("#SVGID_5_ stop:nth-child(2)",1,{attr:{offset:'1'},stopColor:'#006175',stopOpacity:1},0)

				TweenMax.to("#AL", 1, {stroke:"#00b9df"})
				this.parentNode.appendChild(this); 
				//TweenMax.to(".altext", 1, {fill:"#00b9df"})
			}, mouseout: function() {
				
				TweenMax.to("#SVGID_5_ stop:nth-child(1)",1,{attr:{offset:'1'},stopColor:'#212121'})
				TweenMax.to("#SVGID_5_ stop:nth-child(2)",1,{attr:{offset:'0'},stopColor:'#006175',stopOpacity:0},0)

				TweenMax.to("#AL", 1, {stroke:"#656565"})
				//TweenMax.to(".altext", 1, {fill:"#4D4D4D"})
			}
		});
	} // end if is mobile, - false by the way

	if(!!isMobile){
		$("#LA").on({
			click: function(){
				master.seek("louisianastart");
				master.play();
			}
		})
		$("#MS").on({
			click: function(){
				master.seek("missstart");
				master.play();
			}
		})
		$("#AL").on({
			click: function(){
				master.seek("alastart");
				master.play();
			}
		})
	}

	$(".closeState").click(closeAllStates);

	TweenMax.set("#loadPopUp", {autoAlpha:0, zIndex:0})
	TweenMax.set("#MSpopup", {autoAlpha:0, zIndex:0})
	TweenMax.set("#ALpopup", {autoAlpha:0, zIndex:0})
	TweenMax.set("#LApopup", {autoAlpha:0, zIndex:0})


		function loadPopUp(state){
			closePopUps()
			TweenMax.to("#loadPopUp", 1, {autoAlpha:1})
			if( state == ms){
				TweenMax.set("#loadPopUp",{zIndex:160})
				TweenMax.to("#map svg", 1, {zIndex:0})
				TweenMax.to("#MSpopup", 1, {autoAlpha:1, zIndex:160})
				TweenMax.to("#scrollIndicator", 1, {autoAlpha:0})
				//initUnits(ms);
			} else if ( state == al ){
				TweenMax.set("#loadPopUp",{zIndex:160})
				TweenMax.to("#map svg", 1, {zIndex:0})
				TweenMax.to("#ALpopup", 1, {autoAlpha:1, zIndex:160})
				TweenMax.to("#scrollIndicator", 1, {autoAlpha:0})
				//initUnits(al);
			} else if ( state == la ){
				TweenMax.set("#loadPopUp",{zIndex:160})
				TweenMax.to("#map svg", 1, {zIndex:0})
				TweenMax.to("#LApopup", 1, {autoAlpha:1, zIndex:160})
				TweenMax.to("#scrollIndicator", 1, {autoAlpha:0})
				//initUnits(la);
			}
		}

		function closePopUps(){
			TweenMax.to("#loadPopUp, #MSpopup, #ALpopup, #LApopup", 1, {autoAlpha:0, zIndex:0})
			TweenMax.to("#scrollIndicator", 1, {autoAlpha:1})
			TweenMax.to("#map svg", 1, {zIndex:160})
		}

		function closeAllStates(){
			//TweenMax.set("#loadPopUp",{zIndex:0})
			TweenMax.to("#map svg", 1, {scale:1, ease:Power1.easeInOut, zIndex:160})
			TweenMax.to("#loadPopUp, #MSpopup, #ALpopup, #LApopup", 1, {autoAlpha:0, zIndex:0})
			TweenMax.to("#scrollIndicator", 1, {autoAlpha:1})
		}

	if(!isMobile){
		//load pop up



		$(".footervideo1").colorbox({
		    inline:true, 
		    width: "870px",
		    height: "470px",
		    href:"#footerVideoPopUp1", 
		    transition: "none", 
		    fadeOut: 0
		  });

		$(".footerBanger .closeVideo").click(function(e){
			e.preventDefault();
			$("video").get(1).pause();
			$().colorbox.close();
		});

		$(".footervideo2").colorbox({
		    inline:true, 
		    width: "870px",
		    height: "470px",
		    href:"#footerVideoPopUp2", 
		    transition: "none", 
		    fadeOut: 0
		  });

		$(".footerBanger .closeVideo").click(function(e){
			e.preventDefault();
			$("video").get(2).pause();
			$().colorbox.close();
		});

		$(".footervideo3").colorbox({
		    inline:true, 
		    width: "870px",
		    height: "470px",
		    href:"#footerVideoPopUp3", 
		    transition: "none", 
		    fadeOut: 0
		  });

		$(".footerBanger .closeVideo").click(function(e){
			e.preventDefault();
			$("video").get(3).pause();
			$().colorbox.close();
		});

		$(document).on('cbox_complete', function(){
			$('#colorbox').find('video')[0].play();
		});
	}//end if is not mobile

	// $(".footermobilevideo1").click(function(e){
	// 	e.preventDefault();
	// 	$('video').each( function (i,ele) { ele.pause() });
	// 	$('video').filter('#hancockVideo').get(0).play()
	// });
	// $(".footermobilevideo2").click(function(e){
	// 	e.preventDefault();
	// 	$('video').each( function (i,ele) { ele.pause() });
	// 	$("video").get(1).play();
	// });
	// $(".footermobilevideo3").click(function(e){
	// 	e.preventDefault();
	// 	$('video').each( function (i,ele) { ele.pause() });
	// 	$("video").get(3).play();
	// });


	if( !!isMobile ){
		$('body').on({
	    	'touchmove': function(e) {
	        	e.preventDefault();
	    	}
	    });
	}
	if(!!isMobile){
		var scrubpoint = 0;
		var isScrolling = null;
		$('body').hammer().on('pan', function (e) {
			e.preventDefault();
			var deltaY = e.gesture.deltaY;
			if ( deltaY != 0 && Math.abs(deltaY) > 2 ) {
				if ( !isScrolling ) {
					$('video').each( function (i, ele) { ele.pause() } );
				}
				master.pause();
				scrubpoint = ( deltaY / Math.abs(deltaY) );
				if ( !!isScrolling ) {
					clearTimeout( isScrolling );
					isScrolling = null;
				}
				isScrolling = setTimeout( function () {
					isScrolling = null;
					master.play();
					scrubpoint = 0;
				}, 800 );
			}
			//console.log(e)
		});

		TweenMax.ticker.addEventListener('tick', function () {
			var scrollmod = scrubpoint / -40;
			if ( isScrolling && master.time() + scrollmod > 0.01 && master.time() + scrollmod < master.duration() - 0.01 ) {
				master.seek( master.time() + scrollmod );
			}
		});
	} //end mobile


	var scrubpoint = 0;
	var isScrolling = null;
	$(document).on('mousewheel', function (e) {
		if ( e.deltaY != 0 && Math.abs(e.deltaY) > 5 ) {
			if ( !isScrolling ) {
				$('video').each( function (i, ele) { ele.pause() } );
			}
			master.pause();
			scrubpoint = ( e.deltaY / Math.abs(e.deltaY) );
			if ( !!isScrolling ) {
				clearTimeout( isScrolling );
				isScrolling = null;
			}
			isScrolling = setTimeout( function () {
				isScrolling = null;
				master.play();
				scrubpoint = 0;
			}, 500 );
		}
		//console.log(e);
	});
	TweenMax.ticker.addEventListener('tick', function () {
		var scrollmod = scrubpoint / -20;
		if ( isScrolling && master.time() + scrollmod > 0.01 && master.time() + scrollmod < master.duration() - 0.01 ) {
			master.seek( master.time() + scrollmod );
		}
	});









	//mobile Navigation Hamburger
	$('#hamburger').click(function(e){
		$(this).toggleClass('open');
		e.preventDefault();
	});

	//Mobile nav
	var nav_slide_px = 250;	// Width of menu
	var mobile_nav = $('.mobile-nav');	// left nav menu
	var overlay = $('.overlay');

	var show_mobile_nav = function() {
		TweenMax.to(mobile_nav, 0.75, {left:"0px", zIndex:9999, ease: Sine.easeInOut});
		TweenMax.to(overlay, 0.75, {right:0, left:nav_slide_px, display:"block", ease: Sine.easeInOut});
	};

	var hide_mobile_nav = function() {
		TweenMax.to(mobile_nav, 0.5, {left:"-250px", zIndex:0, ease: Sine.easeInOut})
		TweenMax.to(overlay, 0.5, {left:0, right:0, display:"none", ease: Sine.easeInOut})
	};

	if(!!$.fn.hammer){
		$('.mobile-nav').hammer({ prevent_default: true });

		$('.mobile-nav').hammer({ prevent_default: true }).on('pan', function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
		});

		$('a.mobile-nav-second-level-back-button').hammer({ prevent_default: true }).on('touchend', function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			$("ul.mobile-nav-second-level").scrollTop(0);
		});

		// Deal with menu button touches / swipes
		$('#hamburger').hammer({ prevent_default: true }).on('touchstart swipe', function(ev){
			if (parseInt(mobile_nav.css('left')) == 0) {
				hide_mobile_nav();
			} else {
				show_mobile_nav();
			}
			return;
		});

		$('.overlay').hammer().on('touchstart dragstart swipe', function(ev){
			// Ignore any default action
			ev.preventDefault();
			ev.stopPropagation();
			
			// Hide the currently revealed menu
			if (parseInt(mobile_nav.css('left')) == 0 ) {
				hide_mobile_nav();
			} else {
				hide_mobile_nav();
			}
			return;
		});
	} 

	//track logo clicks in footer nav
	$('.hanc-link, .aboutushanclink').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Hancock');
	});
	$('.whit-link, .aboutuswhitneylink').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Whitney');
	});
	$('.facebook').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Facebook');
	});
	$('.facebook').on('click', function(e) {
		e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
	});
	$('.twitter').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Twitter');
	});
	$('.twitter').on('click', function(e) {
		e.preventDefault()
	    window.open($(this).attr('href'), 'twittershare', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
	});
	$('.linked').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Linked In');
	});
	$('.linked').on('click', function(e) {
		e.preventDefault();
		window.open($(this).attr('href'), 'linkedINshare', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
	});
	$('.youtube').on('click', function() {
		ga('send', 'event', 'External Link', 'Click', 'Youtube');
	});


});	//end ready


//split text setups
var openingSplitText1 = new SplitText(".openingtext .slimfont", {type:"words"});
var openingSplitText2 = new SplitText(".openingtext .slimfont.second", {type:"words, chars", wordsClass:"opNum++"});
var openingSplitTextWords1 = openingSplitText1.words;
var openingSplitTextWords2 = openingSplitText2.chars;

var augSplitText1 = new SplitText("#august29 .thickfont", {type:"words, chars, lines"});
var augSplitText2 = new SplitText("#august29 .slimfont", {type:"words, chars lines", wordsClass:"augNum++"});
var augSplitTextWords1 = augSplitText1.words;
var augSplitTextWords2 = augSplitText2.words;

var connectText1 = new SplitText("#connections .slimfont", {type:"words"});
var connectText2 = new SplitText("#connections .thickfont", {type:"words", wordsClass:"conn1Num++"});
var connectTextWords1 = connectText1.words;
var connectTextWords2 = connectText2.words;

var connectPaths = $('svg#connect-svg > path');
TweenMax.set(connectPaths, {drawSVG:"0%"});

//mobile svg path
var connectPathsMobile = $('svg#connect-svg-mobile > path');
TweenMax.set(connectPathsMobile, {drawSVG:"0%"});

var rebirthText1 = new SplitText("#rebirth .slimfont", {type:"words, chars"});
var rebirthText2 = new SplitText("#rebirth .thickfont", {type:"words, chars"});
var rebirthText3 = new SplitText("#rebirth .reb-add", {type:"words, chars"});
var rebirthTextWords1 = rebirthText1.words;
var rebirthTextWords2 = rebirthText2.words;
var rebirthTextWords3 = rebirthText3.words;

var thankYouText1 = new SplitText("#thankYou .set1", {type:"words, chars", wordsClass:"thanksNum++"});
var thankYouText2 = new SplitText("#thankYou .set2", {type:"words, chars"});
var thankYouText3 = new SplitText("#thankYou .set3", {type:"words, chars"});
var thankYouTextWords1 = thankYouText1.words;
var thankYouTextWords2 = thankYouText2.words;
var thankYouTextWords3 = thankYouText3.words;

var thankYouPaths = $('svg.thanks > path');
TweenMax.set(thankYouPaths, {drawSVG:"0%"});

var thankYouMobilePaths = $('svg#mobile-thankyou-svg > path');
TweenMax.set(thankYouMobilePaths, {drawSVG:"0%"});

var gulfportText = new SplitText("#gulfport .slimfont", {type:"words, chars", wordsClass:"gportNum++"})
var nolaText = new SplitText("#nola .slimfont", {type:"words, chars", wordsClass:"nolaNum++"})

var mapPaths = $('#map svg path');
TweenMax.set(mapPaths, {drawSVG:"0%"});


// Create mastertimeline
var master = new TimelineMax({});
master
	//.pause()
	.add( "start" )

	.add( openingSceneIntro(openingSplitTextWords1, openingSplitTextWords2) )
	.add( TweenMax.to(".forceBtn", 0.1, { className:"+=active" }))
	.add( "openingMiddle" )
	.add( openingSceneOutro() )

	.add( "breakpoint1" )

	.add( videoProcedureIntro() )
	.add( "videoMiddle" )
	.add( videoProcedureOutro() )

	.add( "breakpoint2" )
	.add( TweenMax.to(".forceBtn", 0.1, { className:"-=active" }))
	.add( TweenMax.to(".augBtn", 0.1, { className:"+=active" }))
	.add( august29Intro(augSplitTextWords1, augSplitTextWords2) )
	.add( "augMiddle" )
	.add( august29Outro(augSplitTextWords1, augSplitTextWords2) )

	.add( "breakpoint3" )

	.add( firstConnectIntro(connectTextWords1, connectTextWords2) )
	.add( "connectMiddle" )
	.add( firstConnectOutro(connectTextWords1, connectTextWords2) )

	.add( "breakpoint4" )

	.add( rebirthIntro(rebirthTextWords1, rebirthTextWords2, rebirthText3) )
	.add( "rebirthMiddle" )
	.add( rebirthOutro(rebirthTextWords1, rebirthTextWords2, rebirthText3) )

	.add( "breakpoint5" )

	.add( thankYouIntro() )
	.add( "thankYouMiddle" )
	.add( thankYouOutro() )

	.add( "breakpoint6" )

	.add( gulfPortStoryIntro() )
	.add( "gulfPortMiddle" )
	.add( gulfPortStoryOutro() )

	.add( "breakpoint7" )

	.add( nolaStoryIntro() )
	.add( "nolaMiddle" )
	.add( nolaStoryOutro() )

	.add( "breakpoint8" )
	.add( TweenMax.to(".augBtn", 0.1, { className:"-=active" }))
	.add( TweenMax.to(".thankYouBtn", 0.1, { className:"+=active" }))
	.add( mapIntro() )
	.add( "mapMiddle" )
	.add( mapOutro() )


	if( !!isMobile ){
		master.add( "louisianastart" )
		.add( louisianaIntro() )
		.add( "louisianamiddle" )
		.add( louisianaOutro() )
		.add( "louisianaEnd" )
	}

	if( !!isMobile ){
		master.add( "missstart" )
		.add( missIntro() )
		.add( "missmiddle" )
		.add( missOutro() )
		.add( "missEnd" )
	}

	if( !!isMobile ){
		master.add( "alastart" )
		.add( alaIntro() )
		.add( "alamiddle" )
		.add( alaOutro() )
		.add( "alaEnd" )
	}

	if( !!isMobile ){
		master.add( "threepackvideos" )
		.add( mobileVideoFooterIntro() )
		.add( "mobileVideoFooter" )
		.add( mobileVideoFooterOutro() )
		.add( "threepackvideosEnd" )
	}

	master.add( "breakpoint9" )
	.add( TweenMax.to(".thankYouBtn", 0.1, { className:"-=active" }))
	.add( TweenMax.to(".aboutBtn", 0.1, { className:"+=active" }))

	.add( footerScene() )
	.add( "end" );
	//.from(".linelength", master.duration(), {width:0, ease:Linear.easeNone}, 0);
	//.from(".linelength", master.duration(), {width:0, ease:Linear.easeNone}, 0).timeScale(2);


//Animations
function openingSceneIntro(openingSplitTextWords1, openingSplitTextWords2){
	TweenMax.set("#opening", {autoAlpha:0})
	TweenMax.set(".cloud2", {autoAlpha:0})
	
	var tl = new TimelineMax({onStart:activeNavLink, onStartParams:[forceBtn]});

    tl
	    .to("#opening", 1, {autoAlpha:1, delay:0.5, onComplete:eventTrackForce})
		.staggerFrom(openingSplitTextWords1, 1.5, {opacity:0, ease:Power1.easeOut}, 0.1, 0.8)
		.staggerFrom(openingSplitTextWords2, 1.5, {opacity:0, ease:Power1.easeOut}, 0.1, 1)
		.to(".clouds", 3, {scale:1.2, transformOrigin:"bottom right", ease:Power1.easeOut, rotationZ: '0.01deg'}, 0)
	return tl;

}
function openingSceneOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo("#opening", 0.5, {autoAlpha:0, y:-500, ease:Power1.easeIn});

	return tl;
}

function videoProcedureIntro(){
	TweenMax.set("#forceVideo", { autoAlpha:0 })
	
	var tl = new TimelineMax({});
	tl
		.to("#forceVideo", 1, {autoAlpha:1, onComplete:videoPlay})
		.add( stopIt )

	return tl;
}
function videoProcedureOutro(){
	var tl = new TimelineMax({});
	tl
		.to("#forceVideo", 1, {autoAlpha:0})

	return tl;
}

function august29Intro(augSplitTextWords1, augSplitTextWords2){
	TweenMax.set("#august29", {autoAlpha:0})
	var tl = new TimelineMax({onStart:activeNavLink, onStartParams:[augBtn]});
	tl
		.to("#august29", 0.5, {autoAlpha:1, onComplete:eventTrackAug29})
		.staggerFrom(augSplitTextWords1, 2.3, {opacity:0, ease:Power1.easeOut}, 0.25)
		.staggerFrom(augSplitTextWords2, 2.3, {opacity:0, ease:Power1.easeOut}, 0.25, "-=1.5")
		.add( stopIt )
	return tl;
}
function august29Outro(augSplitTextWords1, augSplitTextWords2){
	var tl = new TimelineMax({});
	tl
		.staggerTo(augSplitTextWords1, 1, {opacity:0, delay:0.5}, 0.1)
		.staggerTo(augSplitTextWords2, 1, {opacity:0}, 0.1, "-=1.5")
	return tl;
}


function firstConnectIntro(connectTextWords1, connectTextWords2){
	TweenMax.set("#connections", {autoAlpha:0});

	if( !!isMobile ){
		var tl = new TimelineMax({});
		tl
			.to("#connections", 1, {autoAlpha:1})
			.to(connectPathsMobile.eq(0), 2, {drawSVG:"100%"})
			.to(connectPathsMobile.eq(1), 1, {drawSVG:"100%"}, 2)
			.staggerFrom(connectTextWords1, 2, {autoAlpha:0, ease:Power1.easeInOut}, 0.05, 2)
			.staggerFrom(connectTextWords2, 2, {autoAlpha:0, ease:Power1.easeInOut, delay:0.5}, 0.05, 2.5)
			.from("#rainyDay", 5, {scale:1.2, transformOrigin:"bottom left", rotationZ: '0.01deg'}, 0)
			.add( stopIt )
		return tl;
	} else if ( !isMobile ) {
		var tl = new TimelineMax({});
		tl
			.to("#connections", 1, {autoAlpha:1})
			if( ie ){
				tl.to(connectPaths.eq(0), 2, {drawSVG:"100%", strokeWidth:"+=40", fill:"white"})
				.to(connectPaths.eq(1), 1, {drawSVG:"100%", strokeWidth:"+=40", fill:"black"}, 2)
			} else {
				tl.to(connectPaths.eq(0), 2, {drawSVG:"100%"})
				.to(connectPaths.eq(1), 1, {drawSVG:"100%"}, 2)
			}
			tl.staggerFrom(connectTextWords1, 2, {autoAlpha:0, ease:Power1.easeInOut}, 0.05, 2)
			.staggerFrom(connectTextWords2, 2, {autoAlpha:0, ease:Power1.easeInOut, delay:0.5}, 0.05, 2.5)
			.from("#rainyDay", 5, {scale:1.2, transformOrigin:"bottom left", rotationZ: '0.01deg'}, 0)
			.add( stopIt )
		return tl;
	}
}
function firstConnectOutro(connectTextWords1, connectTextWords2){
	var tl = new TimelineMax({});
	tl
		.staggerTo([connectTextWords1, connectTextWords2, connectPaths.eq(0), connectPaths.eq(1), "#connections"], 1.5, {autoAlpha:0, y:-500, ease:Circ.easeIn}, 0.01)
	return tl;

}


function rebirthIntro(){
	TweenMax.set("#rebirth", {autoAlpha:0})

	var tl = new TimelineMax({});
	tl
		.to("#rebirth", 0.3, {autoAlpha:1})
		.staggerFrom(rebirthTextWords1, 1.5, {opacity:0, ease:Power1.easeOut}, 0.1)
		.staggerFrom(rebirthTextWords3, 1.5, {opacity:0, ease:Power1.easeOut}, 0.1)
		.staggerFrom(rebirthTextWords2, 1.5, {opacity:0, ease:Power1.easeOut}, 0.1)
		.add( stopIt )
	return tl;
}
function rebirthOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo([rebirthTextWords1,rebirthTextWords3,rebirthTextWords2], 1, {autoAlpha:0, delay:0.5}, 0.2)
		.to("#rebirth", 0.3, {autoAlpha:0})

	return tl;
}


function thankYouIntro(){
	TweenMax.set("#thankYou", {autoAlpha:0})

	if( !!isMobile ){

		var tl = new TimelineMax({});
		tl
			.to("#thankYou", 0.5, {autoAlpha:1}, 0.1)
			.to(thankYouMobilePaths.eq(0), 2, {drawSVG:"100%"})
			.to(thankYouMobilePaths.eq(1), 1, {drawSVG:"100%"}, 2)
			.staggerFrom(thankYouTextWords1, 1, {autoAlpha:0, ease:Circ.easeIn}, 0.08, 0.75)
			.staggerFrom(thankYouTextWords2, 1.8, {autoAlpha:0, ease:Circ.easeIn}, 0.5, 1.5)
			.staggerFrom(thankYouTextWords3, 1.8, {autoAlpha:0, ease:Circ.easeIn}, 0.12, "-=1")
			.from("#thankYou .thankYouBg", 8, {scale:1.2,  transformOrigin:"bottom left", rotationZ: '0.01deg'}, 0)
			.add( stopIt )

		return tl;

	} else if( !isMobile ){

		var tl = new TimelineMax({});
		tl
			.to("#thankYou", 0.5, {autoAlpha:1}, 0.1)
			if( ie ){
				tl.to(thankYouPaths.eq(0), 2, {drawSVG:"100%", strokeWidth:"+=40", fill:"white"})
				.to(thankYouPaths.eq(1), 1, {drawSVG:"100%", strokeWidth:"+=40", fill:"black"}, 2)
			} else {
				tl.to(thankYouPaths.eq(0), 2, {drawSVG:"100%"})
				.to(thankYouPaths.eq(1), 1, {drawSVG:"100%"}, 2)
			}
			tl.staggerFrom(thankYouTextWords1, 1, {autoAlpha:0, ease:Circ.easeIn}, 0.08, 0.75)
			.staggerFrom(thankYouTextWords2, 1.8, {autoAlpha:0, ease:Circ.easeIn}, 0.5, 1.5)
			.staggerFrom(thankYouTextWords3, 1.8, {autoAlpha:0, ease:Circ.easeIn}, 0.12, "-=1")
			.from("#thankYou .thankYouBg", 8, {scale:1.2,  transformOrigin:"bottom left", rotationZ: '0.01deg'}, 0)
			.add( stopIt )

		return tl;

	} 
}
function thankYouOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo([thankYouTextWords1, thankYouTextWords2, thankYouTextWords3, "thankYou svg, #thankYou"], 1, {autoAlpha:0, y:-500, ease:Circ.easeIn, delay:0.3})

	return tl;
}

//gulfport In out
function gulfPortStoryIntro(){
	TweenMax.set("#gulfport", {autoAlpha:0})
	var tl = new TimelineMax({onStart:whitescrollindicator, onStartParams:["whitescrollindicator"]});
	tl
		.to("#gulfport", 2, {autoAlpha:1})
		.from("#gulfport .gulfport-bg", 4, {scale:1.1,  transformOrigin:"top right", rotationZ: '0.01deg'}, 0)
		.staggerFrom("#gulfport .slimfont", 2, {opacity:0}, 0.2, 0.2)

	return tl;
}
function gulfPortStoryOutro(){
	var tl = new TimelineMax({});
	tl
		.to("#gulfport", 1, {autoAlpha:0})

	return tl;
}

//nola In Out
function nolaStoryIntro(){
	TweenMax.set("#nola", {autoAlpha:0})
	var tl = new TimelineMax({onStart:whitescrollindicator, onStartParams:["scrollIndicator"]});
	tl
		.to("#nola", 2, {autoAlpha:1})
		.from("#nola .nola-bg", 4, {scale:1.1, transformOrigin:"top left", rotationZ: '0.01deg'}, 0)
		.staggerFrom("#nola .slimfont", 2, {opacity:0}, 0.2, 0.2)
		.add( stopIt )
	return tl;
}
function nolaStoryOutro(){
	var tl = new TimelineMax({});
	tl
		.to("#nola", 1, {autoAlpha:0})

	return tl;
}


//map
function mapIntro(){
	TweenMax.set("#map", {autoAlpha:0})
	var tl = new TimelineMax({onStart:activeNavLink, onStartParams:[thankYouBtn]});
	tl
		.to("#map", 0.3, {autoAlpha:1, onComplete:eventTrack10YearsLater})
		.staggerFrom("#MS, #LA, #AL", 2, {fill:"black", ease:Circ.easeIn}, 0.3)
		.staggerTo(mapPaths, 4, {drawSVG:"100%", ease:Power1.easeInOut}, 0.3, "-=2")
		.from("#map svg", tl.duration(), {scale:0.8}, 0)
		.add( stopIt )

	return tl;
}
function mapOutro(){
	var tl = new TimelineMax({});
	tl
		.to("#map >", 1, {autoAlpha:0})

	return tl;
}

function louisianaIntro(){
	TweenMax.set(".louisiana", {autoAlpha:0})
	var tl = new TimelineMax({});
	tl
		.to(".louisiana", 0.3, {autoAlpha:1})
		.staggerFrom(".louisiana >", 1.5, {autoAlpha:0, y:200}, 0.3)
		.add( stopIt )
		
	return tl;
}
function louisianaOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo(".louisiana >", 0.5, {autoAlpha:0}, 0.1)
		
	return tl;
}

function missIntro(){
	TweenMax.set(".miss", {autoAlpha:0})
	var tl = new TimelineMax({});
	tl
		.to(".miss", 0.3, {autoAlpha:1})
		.staggerFrom(".miss >", 1.5, {autoAlpha:0, y:200}, 0.1)
		.add( stopIt )
		
	return tl;
}
function missOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo(".miss >", 0.5, {autoAlpha:0}, 0.1)
		
	return tl;
}

function alaIntro(){
	TweenMax.set(".ala", {autoAlpha:0})
	var tl = new TimelineMax({});
	tl
		.to(".ala", 0.3, {autoAlpha:1})
		.staggerFrom(".ala >", 1.5, {autoAlpha:0, y:200}, 0.1)
		.add( stopIt )
		
	return tl;
}
function alaOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo(".ala >", 0.5, {autoAlpha:0}, 0.1)
		
	return tl;
}

function mobileVideoFooterIntro(){
	TweenMax.set(".threepackvideos", {autoAlpha:0})
	var tl = new TimelineMax({});
	tl
		.to(".threepackvideos", 0.3, {autoAlpha:1})
		.staggerFrom(".threepackvideos >", 1.5, {autoAlpha:0, y:200}, 0.1)
		.add( stopIt )
		
	return tl;
}
function mobileVideoFooterOutro(){
	var tl = new TimelineMax({});
	tl
		.staggerTo(".threepackvideos >", 0.5, {autoAlpha:0}, 0.1)
		
	return tl;
}

function footerScene(){
	TweenMax.set("#footer", {autoAlpha:0})

	var tl = new TimelineMax({onStart:activeNavLink, onStartParams:[aboutBtn]});
	tl
		.to("#footer", 1, {autoAlpha:1, onComplete:eventTrackAboutUs})
		.staggerFrom("#footer >", 2.5, {autoAlpha:0, y:200}, 0.3)
		.add( stopIt )
		
	return tl;
}





//Stop timeline
function stopIt(){
	master.stop();
}

function videoPlay(){
	$("video").get(0).play();
}

function videoEnded(){
	master.play();
}

function activeNavLink(x){
	$("#clickNav ul li a").removeClass("active");
	$("#clickNav ul li a"+x).addClass("active");
	console.log(master.getLabelBefore(), master.getLabelAfter());
	if(master.getLabelAfter() == "end"){
		TweenMax.to("#scrollIndicator", 1, {autoAlpha:0})
	} else if (master.getLabelAfter() !== "end"){
		TweenMax.to("#scrollIndicator", 1, {autoAlpha:1})
	}
}
function whitescrollindicator(imgsrc){
	//console.log(imgsrc);
	$("#scrollIndicator a img").attr('src', 'img/'+imgsrc+'.png');
}

//GA event tracks
function eventTrackForce(){
	ga('send', 'event', 'Frame', 'View', 'Force');
}
function eventTrackAug29(){
	ga('send', 'event', 'Frame', 'View', 'August 29th');
}
function eventTrack10YearsLater(){
	ga('send', 'event', 'Frame', 'View', '10 Years Later');
}
function eventTrackAboutUs(){
	ga('send', 'event', 'Frame', 'View', 'About Us');
}


