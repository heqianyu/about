var page1=document.getElementById("page1")
var page2=document.getElementById("page2")
var page3=document.getElementById("page3")
var img=document.getElementById("rotate");
var audio=document.getElementsByTagName("audio")[0];
audio.volume=0.2;
//添加监听事件,audio播放完毕自动停止转动
audio.addEventListener("ended",function(event){
	img.setAttribute("class","");
},false)
//img.onclick=function(){
//	if(audio.paused){
//		audio.play();
//		this.setAttribute("class","play");
//	}else{
//		audio.pause()
//		this.setAttribute("class","");
//	};
//}
img.addEventListener("touchstart",function(event){
	if(audio.paused){
		audio.play();
		this.setAttribute("class","play");
	}else{
		audio.pause()
		this.setAttribute("class","");
	};
},false)
page1.addEventListener("touchstart",function(event){
	page1.style.display="none";
	page2.style.display="block";
	page3.style.display="block";
	page3.style.top="100%";
	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
		},4000);
	},false)
