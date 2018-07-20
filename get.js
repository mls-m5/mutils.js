//Copyright Mattias Larsson Sköld

function get(url, success, fail) {
	var req = new XMLHttpRequest();
	req.addEventListener("load", function() {
		if (req.readyState == 4 && req.status == "200") {
			if (typeof success === "function") {
				success(this.responseText);
			}
		}
		else {
			if (typeof fail === "function") {
				fail(this.responseText);
			}
		}
	});
	req.open("GET", url);
	req.send();
}

function post(url, data, success, fail) {
	var req = new XMLHttpRequest();
	req.open("POST", url);
	req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	req.addEventListener("load", function() {
		if (req.readyState == 4 && (req.status == "200" || req.status == "201")) {
			if (typeof success === "function") {
				success(this.responseText);
			}
		}
		else {
			if (typeof fail === "function") {
				fail(this.responseText);
			}
		}
	});
	req.send(JSON.stringify(data));
}