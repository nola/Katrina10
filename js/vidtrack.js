

var trackQuarter = false;
var trackhalf = false;
var trackthreequarters = false;
var fullplay = false;
var duration = $("#frcvid").duration;
document.addEventListener("DOMContentLoaded", initVidTrack, false);
function initVidTrack(){
	var frcvideo = document.getElementById("frcvid");
	frcvideo.addEventListener("timeupdate", videoTimeUpdate, false);
	frcvideo.addEventListener("play", videoPlayed, false);
}
function videoTimeUpdate(duration) {
	//grab the current time from the video. 
	var curTime=document.getElementById("frcvid").currentTime;
	var duration=document.getElementById("frcvid").duration;
	var prct = curTime / duration;

	if(prct >= 0.25 && !trackQuarter){
		ga('send', 'event', 'Video', '25% completed', 'Anthem');
		trackQuarter = true;
	}
	if(prct >= 0.50 && !trackhalf){
		ga('send', 'event', 'Video', '50% completed', 'Anthem');
		trackhalf = true;
	}
	if(prct >= 0.75 && !trackthreequarters){
		ga('send', 'event', 'Video', '75% completed', 'Anthem');
		trackthreequarters = true;
	}
	if(prct >= 0.99 && !fullplay){
		ga('send', 'event', 'Video', '100% completed', 'Anthem');
		fullplay = true;
	}
}

function videoPlayed() {
	ga('send', 'event', 'Video', 'Start', 'Anthem');
}


var trackQuarter2za = false;
var trackhalf2za = false;
var trackthreequarters2za = false;
var fullplay2za = false;
var duration2za = $("#whitneyVideo").duration;
document.addEventListener("DOMContentLoaded", initVidTrack2za, false);
function initVidTrack2za(){
	var whitneyVideo = document.getElementById("whitneyVideo");
	whitneyVideo.addEventListener("timeupdate", videoTimeUpdate2za, false);
	whitneyVideo.addEventListener("play", videoPlayed2za, false);
}
function videoTimeUpdate2za(duration) {
	//grab the current time from the video. 
	var curTime2za=document.getElementById("whitneyVideo").currentTime;
	var duration2za=document.getElementById("whitneyVideo").duration;
	var prct2za = curTime2za / duration2za;

	if(prct2za >= 0.25 && !trackQuarter2za){
		ga('send', 'event', 'Video', '25% completed', 'FONO Whitney');
		trackQuarter2za = true;
	}
	if(prct2za >= 0.50 && !trackhalf2za){
		ga('send', 'event', 'Video', '50% completed', 'FONO Whitney');
		trackhalf2za = true;
	}
	if(prct2za >= 0.75 && !trackthreequarters2za){
		ga('send', 'event', 'Video', '75% completed', 'FONO Whitney');
		trackthreequarters2za = true;
	}
	if(prct2za >= 0.99 && !fullplay2za){
		ga('send', 'event', 'Video', '100% completed', 'FONO Whitney');
		fullplay2za = true;
	}
}

function videoPlayed2za() {
	ga('send', 'event', 'Video', 'Start', 'FONO Whitney');
}

var trackQuarter3za = false;
var trackhalf3za = false;
var trackthreequarters3za = false;
var fullplay3za = false;
var duration3za = $("#hancockVideo").duration;
document.addEventListener("DOMContentLoaded", initVidTrack3za, false);
function initVidTrack3za(){
	var hancockVideo = document.getElementById("hancockVideo");
	hancockVideo.addEventListener("timeupdate", videoTimeUpdate3za, false);
	hancockVideo.addEventListener("play", videoPlayed3za, false);
}
function videoTimeUpdate3za(duration) {
	//grab the current time from the video. 
	var curTime3za=document.getElementById("hancockVideo").currentTime;
	var duration3za=document.getElementById("hancockVideo").duration;
	var prct3za = curTime3za / duration3za;

	if(prct3za >= 0.25 && !trackQuarter3za){
		ga('send', 'event', 'Video', '25% completed', 'FONO Hancock');
		trackQuarter3za = true;
	}
	if(prct3za >= 0.50 && !trackhalf3za){
		ga('send', 'event', 'Video', '50% completed', 'FONO Hancock');
		trackhalf3za = true;
	}
	if(prct3za >= 0.75 && !trackthreequarters3za){
		ga('send', 'event', 'Video', '75% completed', 'FONO Hancock');
		trackthreequarters3za = true;
	}
	if(prct3za >= 0.99 && !fullplay3za){
		ga('send', 'event', 'Video', '100% completed', 'FONO Hancock');
		fullplay3za = true;
	}
}

function videoPlayed3za() {
	ga('send', 'event', 'Video', 'Start', 'FONO Hancock');
}

var trackQuarter4za = false;
var trackhalf4za = false;
var trackthreequarters4za = false;
var fullplay4za = false;
var duration4za = $("#poptechVideo").duration;
document.addEventListener("DOMContentLoaded", initVidTrack4za, false);
function initVidTrack4za(){
	var poptechVideo = document.getElementById("poptechVideo");
	poptechVideo.addEventListener("timeupdate", videoTimeUpdate4za, false);
	poptechVideo.addEventListener("play", videoPlayed4za, false);
}
function videoTimeUpdate4za(duration) {
	//grab the current time from the video. 
	var curTime4za=document.getElementById("poptechVideo").currentTime;
	var duration4za=document.getElementById("poptechVideo").duration;
	var prct4za = curTime4za / duration4za;

	if(prct4za >= 0.25 && !trackQuarter4za){
		ga('send', 'event', 'Video', '25% completed', 'Pop Tech');
		trackQuarter4za = true;
	}
	if(prct4za >= 0.50 && !trackhalf4za){
		ga('send', 'event', 'Video', '50% completed', 'Pop Tech');
		trackhalf4za = true;
	}
	if(prct4za >= 0.75 && !trackthreequarters4za){
		ga('send', 'event', 'Video', '75% completed', 'Pop Tech');
		trackthreequarters4za = true;
	}
	if(prct4za >= 0.99 && !fullplay4za){
		ga('send', 'event', 'Video', '100% completed', 'Pop Tech');
		fullplay4za = true;
	}
}

function videoPlayed4za() {
	ga('send', 'event', 'Video', 'Start', 'Pop Tech');
}