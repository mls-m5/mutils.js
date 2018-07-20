"use strict";

// function mustache(template, data) {
//       var result = template;

//       for (var key in data) {
//             result = result.split("{" + key + "}").join(data[key]);
//       }

//       return result;
// }

function mustache(template, data) {
	var first = template.split("{");
	var ret = first[0];

	function evaluate(expression) {
		var split = expression.split(".");

		if (split.length == 1) {
			return data[expression];
		}
		else {
			var ret = data;
			for (var i = 0; i < split.length; ++i) {
				ret = ret[split[i]];
			}
			return ret;
		}
	}

	for (let i = 1; i < first.length; ++i) {
		var split = first[i].split("}");
		var expression = split[0];
		var text = split[1];
		ret += evaluate(expression) + text;
	}

	return ret;
}