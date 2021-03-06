var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Site_A.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});
