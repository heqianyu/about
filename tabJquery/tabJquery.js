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
			this.tabItems.bind("click",function(){
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
