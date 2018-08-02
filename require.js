
function require(src, success, hide) {
	if (Array.isArray(src)) {
		let started = src.length;

		for (let i in src) {
			let s = src[i];
			require(s, function() {
				--started;
				if (started == 0) {
					success();
				}
			}, hide);
		}
		return;
	}
	var tag = document.createElement("script");
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(tag);

	tag.onload = function() {
		if (hide) {
			tag.remove();
		}
		if (typeof success !== "undefined") {
			success();
		}
	}
	tag.src = src;
}
