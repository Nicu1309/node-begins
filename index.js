var app = require('express')();//This gets the express
var http = require('http').Server(app);//Server works with express
var io = require('socket.io')(http);//Socket is initialized with http server

/**
* Implements the get method for the server
*/
app.get('/', function(req, res){
  res.sendFile(__dirname + '/resources/index.html');
});

/**
 Socket waits for the event connection
*/
io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('disconnect', function(){
    console.log('Client disconnected');
  });
});

/**
* Starts server on port 8080
*/
http.listen(8080, function(){
  console.log('Server listening on port 8080');
});
