// Log Console
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()

// Preloader
$(window).load(function(){$("#preloader").fadeOut(200,function(){$("body").css("overflow","visible");$(this).remove()})})

// Unloader / Transition
$("a.transition").click(function(e){e.preventDefault();linkLocation=this.href;$("body").fadeOut(100,redirectPage)})
function redirectPage() {window.location = linkLocation;}

// Disable Right Click
$(function(){$(this).bind("contextmenu",function(e){e.preventDefault();})})