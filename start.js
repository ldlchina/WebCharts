var express = require('express');
var bodyParser = require('body-parser')
var http = require("http");

//The middlewares are invokded in order.
var expressApp = express();
expressApp.use(express.static(__dirname + '/client'));
expressApp.use(bodyParser());

require("./service/lib/router.js")({'expressApp': expressApp});

var port = 80;

 http.createServer(function(req, res){
	expressApp(req, res);
}).listen(port);

console.log('Server started at port:' + port);