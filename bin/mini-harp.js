#!/usr/bin/env node
var minimist = require('minimist');
var createMiniHarp = require('../');
var parseArgs = minimist(process.argv.slice(2));
var port = parseArgs.port || 4000;
var root = parseArgs._[0] || process.cwd();
var app = createMiniHarp(root);
app.listen(port);
console.log("App start listening on port " + port);