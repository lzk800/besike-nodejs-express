module.exports = makeJade;

var path = require('path');
var fs = require('fs');
var jade = require('jade');

function makeJade(root) {
	return function(request,response,next){
		fs.readFile(root + request.url, {encoding: "utf8"}, function(err, data){
			if(path.extname(request.url) == '.html'){
				fs.readFile(root + '/' + path.basename(request.url, '.html') + '.jade', {encoding: "utf8"}, function(err, data){
					if(err){
						next();
					}else{
						var body = jade.render(data);
						response.setHeader("Content-Length", body.length);
						response.setHeader("Content-Type", "text/html; charset=UTF-8");
						response.end(body);
					}
				})
			}else if (err){
				next();
			}
		});
	}
}