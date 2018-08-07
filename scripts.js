window.onload = function() {
	let copyButtons = document.getElementsByClassName("btn-copy");
	for(key in copyButtons) {
		copyButtons[key].onclick = function() {
		let input = this.parentNode.parentNode.childNodes[5].childNodes[0];
    	input.focus();
    	input.setSelectionRange(0, input.value.length);
    	document.execCommand("copy");
		}
	}
}