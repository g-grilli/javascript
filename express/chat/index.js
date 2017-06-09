var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('connected', new Date());
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  
  
  socket.on('disconnect', function() {
  	console.log('disconnected');
  });
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});