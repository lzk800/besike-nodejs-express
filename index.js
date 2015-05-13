var miniharp = function (root) {
	var connect = require('connect');
	var serveStatic = require('serve-static');
	var path = require('path');
	var prevent = require('./lib/processor/prevent')
	var makeJade = require('./lib/processor/jade');
	var makeLess = require('./lib/processor/less');
	var rewriteURL = require('./lib/URLrewrite');
	var miniHarp = connect();
	miniHarp.use(rewriteURL());
	miniHarp.use(prevent(root));
	miniHarp.use(serveStatic(root));
	miniHarp.use(makeJade(root));
	miniHarp.use(makeLess(root));
	return miniHarp;
};

module.exports = miniharp;