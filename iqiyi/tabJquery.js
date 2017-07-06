;(function($){
	var Tab=function(tab){
		var _this_=this;
		this.tab=tab;//更方便的获取到参数
		//默认的配置
		this.config={
						"triggerType":"mouseover",
						"effect":"fade",
						"invoke":1,
						"auto":false
					};
		//如果html中的配置有出入，则扩展
		if(this.getConfig()){
			$.extend(this.config,this.getConfig());
		};
		//定义有关联的一些对象
		this.tabItems=this.tab.find("ul.tab_nav li");
		this.contenItems=this.tab.find("div.content_item");
		
		var config=this.config;
		//判定触发类型，添加事件
		if(config.triggerType==="click"){
			this.tabItems.bind(config.triggerType,function(){
				_this_.invoke($(this));
			})
		}else if(config.triggerType==="mouseover"||config.triggerType!=="click"){
			this.tabItems.bind("mouseover",function(){
				_this_.invoke($(this));
			});
		};
		//添加定时事件
		if(config.auto){
			_this_=this;
			this.timer=null;
			this.loop=0;
			this.autoPlay();
			this.tab.hover(function(){
				window.clearInterval(_this_.timer);
			},function(){
				_this_.autoPlay();
			});
		};
		
		if(config.invoke>1){
			this.invoke(this.tabItems.eq(config.invoke-1))
		}
	};
	Tab.prototype={
		autoPlay:function(){
			var _this_   =this,
				tabItems =this.tabItems,
				tabLength=tabItems.size(),
				config   =this.config;
			this.timer=window.setInterval(function(){
				_this_.loop++;
//				alert(_this_.loop)
				if(_this_.loop>=tabLength){
					_this_.loop=0;
				};
				tabItems.eq(_this_.loop).trigger(config.triggerType);
			},config.auto);
		},
		//事件里的动作
		invoke:function(currentTab){
			var _this_=this;
			var index=currentTab.index();
			currentTab.addClass("actived").siblings().removeClass("actived");
			var effct=this.config.effect;
			var conItems=this.contentItems;
			if(effct==="default"||effct!="fade"){
				this.contenItems.eq(index).addClass("current").siblings().removeClass("current");
			}
			else if(effct==="fade"){
				this.contenItems.eq(index).fadeIn().siblings().fadeOut();
			};
			if(this.config.auto){
				this.loop=index;
			};
		},
		//获取html中的配置参数
		getConfig:function(){
			var config=this.tab.attr("data-config");
			if(config&&config!=""){
				return $.parseJSON(config);
			}else{
				return null;
			}
		}
	};
	window.Tab=Tab;
})(jQuery);
//轮播方法
;(function($){
	var Turn=function(turn){
		var _this_=this;
		this.turn=turn;
		this.tabItems=this.turn.find("li");
		this.btns=this.turn.find("div")
		var i=0;
		this.btns.eq(0).click(function(){
			if(i>=_this_.tabItems.length-1){
				i=0;_this_.tabItems.eq(_this_.tabItems.length-1).fadeOut();_this_.tabItems.eq(i).fadeIn();
			}else{
				_this_.tabItems.eq(i).fadeOut();
				i++;
				_this_.tabItems.eq(i).fadeIn();}
		})
		this.btns.eq(1).click(function(){
			if(i<=0){
				_this_.tabItems.eq(0).fadeOut();i=1;_this_.tabItems.eq(i).fadeIn();
			}else{
				_this_.tabItems.eq(i).fadeOut();
				i--;
				_this_.tabItems.eq(i).fadeIn();}
		})
	};
	window.Turn=Turn;
})(jQuery);
//$(function(){ i=0;
//			$(".newsColTwo .turnRight").click(function(){if(i>=1){
//				i=0;$(".newsTurn li").eq(1).fadeOut();$(".newsTurn li").eq(i).fadeIn();
//			}else{
//				$(".newsTurn li").eq(i).fadeOut();
//				i++;
//				$(".newsTurn li").eq(i).fadeIn();}
//			});
//			$(".turnLeft").click(function(){if(i<=0){
//				$(".newsTurn li").eq(0).fadeOut();i=1;$(".newsTurn li").eq(i).fadeIn();
//			}else{
//				$(".newsTurn li").eq(i).fadeOut();
//				i--;
//				$(".newsTurn li").eq(i).fadeIn();}
//			})
//			})