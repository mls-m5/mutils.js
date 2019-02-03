//Copyright Mattias Larsson Sköld

function byId(name) {
	return document.getElementById(name);
}

function byClass(name) {
	return document.getElementsByClassName(name);
}

Document.prototype.on = Window.prototype.on =
 XMLHttpRequest.prototype.on = Element.prototype.on = 
	function(type, listener, options) {
		this.addEventListener(type, listener, options);
	}