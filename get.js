//Copyright Mattias Larsson Sköld

function get(url, success, fail) {
	//Usage:
	//set url to single url or a array of urls
	if (Array.isArray(url)) {
		let count = url.length;
		let failed = false;
		let ret = [];
		for (let i in url) {
			let u = url[i];
			function setupCallback(url, i) {
				get(url, function successInner (data) {
					--count;
					ret[i] = data;
					if (count === 0) {
						if (failed) {
							failed(ret);
						}
						else {
							success(ret);
						}
					}
				}, function failedInner() {
					--count;
					failed = true;
					if (count == 0) {
						ret[i] = null;
						failed(ret);
					}
				});
			};
			setupCallback(u, i); //This is to preserv the value of i for each iteration
		}
		return;
	}


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