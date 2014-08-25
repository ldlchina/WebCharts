var fs = require('fs');

var addRoute = function(options){
    if(!options.expressApp)
        return this;
        
    var expressApp = options.expressApp;
   
    /**********************************************************************/
    // Add the route implementation here
    /**********************************************************************/
    
    expressApp.get('/dashboards/:dashboardid', function(req, res, next){
        console.log('get ==> /dashboards/:dashboardid');
		
		var dashboardId = req.params.dashboardid;
		fs.readFile('./client/dashboard.html', 'utf-8', function(err, data){
			if (err != undefined || data == undefined) return;
			res.writeHead(200, {"Content-Type": "text/html"});
    		res.write(data);
    		res.send();
		});
    });
    
    return this;
};


/**********************************************************************/
// Exports
/**********************************************************************/

module.exports = addRoute;