function ref() {
	const xhr = new XMLHttpRequest();
	const url = 'http://' + window.location.host + '/txt/api.php'
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
