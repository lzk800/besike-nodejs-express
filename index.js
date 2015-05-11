var connect = require('connect');
var serveStatic = require('serve-static');

module.exports = function(path){
    return connect().use(serveStatic(path));
}