#!/usr/bin/env node
var miniHarp = require("mini-harp");
var argv = require('minimist')(process.argv.slice(2));
var port = argv['port'] ? argv['port'] : 4000;
var path = argv._[0] ? argv._[0] : process.cwd(); // current directory

app = miniHarp(path);
console.log("Starting mini-harp on http://localhost:" + port);
app.use(function(request,response,next) {
	if(request.url == '/current-time'){
		response.end(new Date().toISOString()+'\n');
    }else{
		next();
	}
}).listen(port);