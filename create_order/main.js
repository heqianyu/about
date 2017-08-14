// main.js
var vm = new Vue({
	el: '#wrap',
	data: {
		guest:{
			name: '何乾宇',
			tel: '18559867710',
			address: '高新南环路XX号XXX大厦-2楼停车场',
			since: '',
			circle: '',
			time: '',
		},
		goods:[
			{goods_name:'燕塘纯牛奶 210ml',quantity:'5'}
		],
	},
	methods:{
		addgoods() {
			var n = Object.keys(this.goods).length;
			Vue.set(this.goods, n, {name:'',age:''})
		}
	}
})