//This is a baby server just to get some stuff on your screen
//Again compliments of the company

var express     = require('express')
var app         = express();
var serveStatic = require('serve-static');
var http        = require('http');

var port = 3000;

app.use(serveStatic(__dirname + "/public"));

app.get('*',function(req,res){
	res.sendFile(__dirname + "/public/index.html");
})

var server = http.createServer(app);
var httpServer = server.listen(port,function(){
	console.log("Express server is listening on: " + port);
})

