;(function($){
	var Tab=function(tab){
		this.tab=tab;
		var _this_=this;
		this.tabPic=this.tab.find("div.wrap img");
		this.tabBtn=this.tab.find("div.pros .pro");//sub的next就是进度条
		this.config={
						"triggerType":"mouseover",
						"effect":"fade",
						"invoke":1,
						"auto":3000
				};
		if(this.getConfig()){
			$.extend(this.config,this.getConfig());
		};
		var config=this.config;
		
		if(config.triggerType==="click"){
			this.tabBtn.bind(config.triggerType,function(){
				_this_.invoke($(this));
			})
		}else if(config.triggerType==="mouseover"||config.triggerType!=="click"){
			this.tabBtn.bind("click",function(){
				_this_.invoke($(this));
			});
		};
		if(config.invoke>1){
			this.invoke(this.tabBtn.eq(config.invoke-1))
		}
		if(config.auto){
			_this_=this;
			this.timer=null;
			this.loop=0;
			this.autoPlay();
			this.tab.hover(function(){
				window.clearInterval(_this_.timer);
			},function(){
				_this_.autoPlay();
			})
		}
	};
	Tab.prototype={
		getConfig:function(){
			var config=this.tab.attr("data-config");
			if(config!=""&&config){
				return $.parseJSON(config);
			}else{
				return null;
			}
		},
		invoke:function(currentTab){
			var _this_=this;
			var index=currentTab.index();
			var effect=this.config.effect;
			
			currentTab.children().animate({width:"225px"},3000).parent().siblings().children().stop().css("width",0);
			if(effect==="fade"){
				this.tabPic.eq(index).fadeIn().siblings().fadeOut();
			}else if(effect==="default"||effect!=="fade"){
				this.tabPic.eq(index).addClass("current").siblings().removeClass("current");
			};
			if(this.config.auto){
				this.loop=index;
			}
		},
		autoPlay:function(){
			var _this_=this,
				tabBtn=this.tabBtn,
				tabLength=tabBtn.size(),
				config=this.config;
			this.timer=window.setInterval(function(){
				_this_.loop++;
				if(_this_.loop>=tabLength){
					_this_.loop=0;
				};
				tabBtn.eq(_this_.loop).trigger(config.triggerType);
			},config.auto);
		}
	};
	window.Tab=Tab;
})(jQuery);
