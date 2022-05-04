function ref() {
	const xhr = new XMLHttpRequest();
	const url = 'https://saying.api.azwcl.com/saying/get'
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(xhr.responseText)
			const data = json.data
			let down = document.getElementById("down_click");
			// console.log(down);
			down.innerHTML = data.content;
			console.log(data.content);
		}
	}
	xhr.open('GET', url)
	xhr.send()
}
ref();
