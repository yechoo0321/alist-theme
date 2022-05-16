document.write("<div class='down'><a id='down_click' href='JavaScript:ref();' class='chakra-text down_click'>每日一言</a></div>");
document.write("<script src='https://cdn1.tianli0.top/gh/stevenjoezhang/live2d-widget@latest/autoload.js'></script>");
document.write("<script nomodule>! function() {var e = document,t = e.createElement('script');if (!('noModule' in t) && 'onbeforeload' in t) {var n = !1;e.addEventListener('beforeload', (function(e) {if (e.target === t) n = !0;else if (!e.target.hasAttribute('nomodule') || !n) return;e.preventDefault()}), !0), t.type = 'module', t.src = '.', e.head.appendChild(t), t.remove()}}();</script>");
document.write("<script nomodule id=''vite-legacy-polyfill' src='https://npm.elemecdn.com/alist-web@2.4.0/dist/assets/polyfills-legacy.1cd77edc.js'></script>");
document.write("<script nomodule id='vite-legacy-entry' data-src='https://npm.elemecdn.com/alist-web@2.4.0/dist/assets/index-legacy.18b38563.js'>System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>");
function ref() {
	const xhr = new XMLHttpRequest();
	const url = 'http://iso.yechoo.cn/txt/api.php'
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(xhr.responseText)
			const data = json.data
			let down = document.getElementById("down_click");
			// console.log(down);
			down.innerHTML = data;
			console.log(data);
		}
	}
	xhr.open('GET', url)
	xhr.send()
}
ref();
