//------------------------------ MODULES -----------------------------//

var http = require('http');
var homepage = require('./server/homepage.js');

//------------------------------ EXTERNAL MODULES -----------------------------//

var debug = require('debug')('homepage');

//------------------------------ EXPRESS SETTINGS -----------------------------//

homepage.set('port', process.env.PORT || 8080);

//------------------------------ SERVER -----------------------------//

http.createServer(homepage).listen(homepage.get('port'), function() {
	debug('Express server listening on port ' + homepage.get('port'));
});