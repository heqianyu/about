// main.js
var vm = new Vue({
	el: '#wrap',
	data: {
		guest:{
			name: '林叶',
			tel: '13255452123',
			address: '高新南环路29号留学生创业大厦2201',
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