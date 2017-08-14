// 老土版本无效ajax.js
window.onload = function () {
	var ad = document.getElementsByClassName('ad');
	var since = document.getElementsByClassName('since');
	var circle = document.getElementsByClassName('circle');
	var time = document.getElementsByClassName('time');
	var created = document.getElementsByClassName('created');
	var inputArray = document.getElementsByTagName('input');
	created[0].onclick = function () {
		ajax({
			url: "",
			type: "post",
			data: {
				'name': inputArray[0].value,
				'tel': inputArray[1].value,
				'address': inputArray[2].value
			}
		})
	}
	function ajax(opt) {
		opt = opt || {};
	    opt.type = opt.type.toUpperCase() || 'POST';
	    opt.url = opt.url || '';
	    opt.async = opt.async || true;
	    opt.data = opt.data || null;
	    opt.success = opt.success || function () {};
	    opt.fail = opt.fail || function () {}
	    var xhr = null;
	    if (XMLHttpRequest) {
	        xhr = new XMLHttpRequest();
	    }
	    else {
	        xhr = new ActiveXObject('Microsoft.XMLHTTP');
	    }
	    var params = [];
	    for (var key in opt.data) {
	        params.push(key + '=' + opt.data[key]);
	    }
	    var postData = params.join('&');

	    if (opt.type === 'POST') {
	        xhr.open(opt.type, opt.url, opt.async);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	        xhr.send(postData);
	    }
	    else if (opt.type === 'GET') {
	        xhr.open(opt.type, opt.url + '?' + postData, opt.async);
	        xhr.send(null);
	    }
	}
}