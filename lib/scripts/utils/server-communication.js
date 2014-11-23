var socket = require('socket.io-client')('http://localhost:8080');

var data = {

  getAllTodos: function() {
    socket.emit('init-data');
  }
}

module.exports = data;
