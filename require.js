
function require(src, success) {
	
	if (Array.isArray(src)) {
		let started = 0;

		for (let i in src) {
			let s = src[i];
			++started;
			require(s, function() {
				--started;
				if (started == 0) {
					success();
				}
			});
		}
		return;
	}
	var tag = document.createElement("script");
	var head = document.getElementsByTagName("head")[0];
	//head.insertBefore(tag, head.firstChild);

	head.appendChild(tag);

	tag.onload = function() {
		if (typeof success !== "undefined") {
			success();
		}
	}
	tag.src = src;

}
