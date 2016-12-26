var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);

express.get('/', function(request, result) {
  result.sendFile(__dirname + '/client.html');
});
express.get('/client.js', function(request, result) {
  result.sendFile(__dirname + '/client.js');
});

http.listen('4444', function() {
  console.log('listening for requests...');
});

io.on('connection', function(socket) {
  socket.on('chat', function(username, message) {
    io.emit('chat', username, message);
  });
});
