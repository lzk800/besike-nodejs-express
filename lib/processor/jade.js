module.exports = makeJade;

function makeJade(root) {
	var fs = require('fs');
	var path = require('path');
	var jade = require('jade');
	return function (req, res, next) {
		if (path.extname(req.url) === '.html') {
			var jadeFile = root + req.url.split('.')[0] + '.jade';
			fs.readFile(jadeFile, {encoding: "utf8"}, function (err, data) {
				if (err) {
					next();
				} else {
					var rendered = jade.render(data);
					res.setHeader('Content-Length', rendered.length);
					res.setHeader('Content-Type', 'text/html; charset=UTF-8');
					res.end(rendered);
				}
			});
		} else {
			next();
		}
	}
}