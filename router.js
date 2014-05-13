var lf = require("./listfiles.js");

function route(pathname) {
  	console.log("About to route a request for " + pathname);
	
	if (pathname==="/listfiles") {
		console.log("trying to list files");
		var files = lf.listFiles();
		return files;
	}
}

exports.route = route;
