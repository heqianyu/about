;(function($){
	var vList=function(list){
		this.list=list;
		var_this_=this;
		this.loop=0;
		this.thumbnails=this.list.find("ul.vList li");
		this.btn=this.list.find("div.vBtn span");
		this.config={
					"triggerType":"click",
					"effect":"fade",
					"invoke":1,
					"auto":3000};
		if(this.getConfig()){
			$.extend(this.config, this.getConfig());
		};
		var config=this.config;
		
		if(config.triggerType="click"||config.effect!="mouseover"){
			this.invoke();
		};
		
		if(config.auto){
			_this_=this;
			this.timer=null;
			this.autoplay();
			this.list.hover(function(){
				window.clearInterval(_this_.timer);
			},function(){
				_this_.autoplay();
			});
		};
	};
	vList.prototype={
		getConfig:function(){
			var config=this.list.attr("data-config");
			if(config&&config!=""){
				return $.parseJSON(config);
			}else{
				return null;
			}
		},
		invoke:function(){
			//给456加show类名。同时sibling清空show。貌似不知道怎么同时获取多个元素？省时间，跳过》_《
			//下面四段极其臃肿的，以后想办法精简或者换方法。
			var _this_=this;
			var effect=this.config.effect;
			if(effect==="fade"||effect!="none"){
				_this_.btn.eq(0).bind("click",function(){
					_this_.loop--;
					if(_this_.loop<0){
						_this_.loop=3;
					};
					_this_.thumbnails.fadeOut();
					_this_.thumbnails.eq(_this_.loop*3).fadeIn(200);
					_this_.thumbnails.eq(_this_.loop*3+1).fadeIn(200);
					_this_.thumbnails.eq(_this_.loop*3+2).fadeIn(200);
				});
				_this_.btn.eq(1).bind("click",function(){
					_this_.loop++;
					if(_this_.loop>3){
						_this_.loop=0;
					};
					_this_.thumbnails.fadeOut();
					_this_.thumbnails.eq(_this_.loop*3).fadeIn(200);
					_this_.thumbnails.eq(_this_.loop*3+1).fadeIn(200);
					_this_.thumbnails.eq(_this_.loop*3+2).fadeIn(200);
				});
			}else{
				_this_.btn.eq(0).bind("click",function(){
					_this_.loop--;
					if(_this_.loop<0){
						_this_.loop=3;
					};
					_this_.thumbnails.removeClass("show");
					_this_.thumbnails.eq(_this_.loop*3).addClass("show");
					_this_.thumbnails.eq(_this_.loop*3+1).addClass("show");
					_this_.thumbnails.eq(_this_.loop*3+2).addClass("show");
				});
				_this_.btn.eq(1).bind("click",function(){
					_this_.loop++;
					if(_this_.loop>3){
						_this_.loop=0;
					};
					_this_.thumbnails.removeClass("show");
					_this_.thumbnails.eq(_this_.loop*3).addClass("show");
					_this_.thumbnails.eq(_this_.loop*3+1).addClass("show");
					_this_.thumbnails.eq(_this_.loop*3+2).addClass("show");
				});
			};
		},
		autoplay:function(){
			var _this_=this,
				config=this.config;
			this.timer=window.setInterval(function(){
				_this_.btn.eq(1).trigger(config.triggerType);
			},config.auto);
		}
	};
	window.vList=vList;
})(jQuery);
//如果需要添加页码，只需要提前找到页码对象，将它与loop对应起来，做的比较多。