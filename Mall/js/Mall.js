$(document).ready(function(){
	var item=$(".shopMenu");
	var activeRow;
	var activeMenu;
	var timer;
	var mouseInMenu = false;
	$(".listWrap").on("mouseenter",function(e){
		mouseInMenu=true
	}).on("mouseleave",function(e){
		mouseInMenu=false
	});
	var mouseTrack=[]
	
	item
	.on("mouseenter","dl",function(e){
		//在200ms内如果快速从左边菜单到右边再到下一行，右边会反应不过来
		if(!activeRow){
			activeRow=$(e.target).addClass("active")
			activeMenu=$("#"+activeRow.data("id"))
			activeMenu.removeClass("hide")
			return
		}
		if(timer){
			clearTimeout(timer)
		}
		
		timer=setTimeout(function(){
			if(mouseInMenu){
				return
			}
			
			activeRow.removeClass("active")
			activeMenu.addClass("hide")
			activeRow=$(e.target).addClass("active")
			activeMenu=$("#"+activeRow.data("id"))
			activeMenu.removeClass("hide")
//			timer=null
		},200)
	})
	.on("mouseleave",function(e){
		if(activeRow){
			activeRow.removeClass("active")
			activeRow=null
		}
		if(activeMenu){
			activeMenu.addClass("hide")
			activeMenu=null
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	
//	var activeRow;
//	var activeMenu;
//	
//	item
//		.on("mouseleave",function(e){
//			$(".listWrap").addClass("hide");
//			if(activeRow){
//				activeRow.removeClass("active")
//				activeRow=null;
//			}
//			if(activeMenu){
//				activeMenu.addClass("hide")
//				activeMenu=null;
//			}
//		})
//		.on("mouseenter","dl",function(e){
//			if(!activeRow){
//				activeRow=$(e.target).addClass("active")
//				activeMenu=$('#'+activeRow.data('id'))
//				activeMenu.removeClass("hide")
//				return
//			}
//			activeRow.removeClass("active")
//			activeMenu.addClass("hide")
//			activeRow=$(e.target)
//			activeRow.addClass("active")
//			activeMenu=$("#"+activeRow.data("id"))
//			activeMenu.removeClass("hide")
//		})
	
	function banner(){
		var imgWidth=$(".banner li").width();
		var page=0;
		var pros=$(".pro");
		function picMove(){
			var nowpage=page;
			if(page>=6){
				$(".bannerImg").delay(3000).animate({left:0},200);page=0;
			}else{
				$(".bannerImg").delay(3000).animate({left:'-='+811},200);page++;
			};
		}
		picMove();
		var intervalImg=setInterval(picMove,"3200");
	};
	banner();
	
	
	var $pwidth=$(".pic img").width();
	var i=1;
	$(".go_right").click(function(){
			if(i>=3){$(".pic").animate({left:0},"normal");i=1;}
			else{$(".pic").animate({left:'-='+$pwidth},"normal");i++;};
			$(".point span").eq(i-1).addClass("purple").siblings().removeClass("purple")
		});
	$(".go_left").click(function(){
			if(i<=1){$(".pic").animate({left:-382},"normal");i=4;}
			else{$(".pic").animate({left:'+='+$pwidth},"normal");i--;};
			$(".point span").eq(i-1).addClass("purple").siblings().removeClass("purple")
		});
	$(".point span").click(function(){
			j=$(this).index();
			$(".pic").animate({left:'-'+j*'191'});
			$(this).addClass("purple").siblings().removeClass("purple");
			i=j+1;
	})
})
