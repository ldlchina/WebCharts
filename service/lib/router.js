var fs = require('fs');

var addRoute = function(options){
	if(!options.expressApp)
		return this;
	
	var expressApp = options.expressApp;
	
	var routesPath = __dirname + '/routes';
	var routeModlues = fs.readdirSync(routesPath);
	
	routeModlues.forEach(function(element, index, array){
		var routeModulePath = __dirname + '/routes/' + element;
		try{
			var routeModule = require(routeModulePath);
					
			if(typeof routeModule === 'function'){
				routeModule(options);
			}
			else{
				console.error('Route Module "' + routeModulePath + '" does not export a function.');
			}
		}
		catch(err){
			console.error('Exception is caught when load route module "' + routeModulePath + '". ' + JSON.stringify(err));
		}
	});	
	
	// Response the error for all the not existing api requests
	expressApp.all('*', function(req, res, next){
		console.error('404 Not Found: ' + req.url);
		res.send(404);
	});
	
	return this;
}

/**********************************************************************/
// Exports
/**********************************************************************/

module.exports = addRoute;