var fs = require("fs")

function listFiles() {
	var filesRet;
	fs.readdir("/Users/rhariharan/workspace/test/", function(errs, files) {
		console.log(files);
		filesRet = files;
	});

	return filesRet;
}

exports.listFiles=listFiles;
