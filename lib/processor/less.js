module.exports = makeLess;

function makeLess(root) {
	var fs = require('fs');
	var path = require('path');
	var less = require('less');
	return function (req, res, next) {
		if (path.extname(req.url) === '.css') {
			var lessFile = root + req.url.split('.')[0] + '.less';
			fs.readFile(lessFile, {encoding: "utf8"}, function (err, data) {
				if (err) {
					next();
				} else {
					less.render(data, function (e, output) {
						res.setHeader('Content-Length', output.length);
						res.setHeader('Content-Type', 'text/css; charset=UTF-8');
						res.end(output);
					});
				}
			});
		} else {
			next();
		}
	}
}