//Copyright Mattias Larsson Sköld

console.log("main is loaded");

function init() {
	console.log("init");

	get("post.php", function(data) {
		console.log(data);
	});

	post("post.php", {title: "This is a title", message: "This is some text"}, function(data) {
		console.log(data);


		var content = byId("output");

		var template = byId("messagetemplate").innerHTML;
		content.innerHTML = mustache(template, JSON.parse(data));

		var content2 = byId("output2");
		var deeptemplate = byId("deeptemplate").innerHTML;
		content2.innerHTML = mustache(deeptemplate, {
			message: {
				title: "Title2",
				content: "this is some nested content"
			}
		});
	});
}