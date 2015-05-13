module.exports = prevent;

var path = require('path');

function prevent() {
	return function(request,response,next){
		if(path.extname(request.url) == '.jade' || path.extname(request.url) == '.less'){
			response.statusCode = 404;
			response.end();
		}
		next();
	}
}