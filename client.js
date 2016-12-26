var socket;

function setup() {
  socket = io();

  socket.on('chat', function(message) {
    document.getElementById('chatContent').innerHTML += '<p>' + message + '</p>';
  });
}

function send() {
  socket.emit('chat', document.getElementById('messageInput').value);
}
