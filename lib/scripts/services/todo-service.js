var socket = require('socket.io-client')('http://localhost:8080'),
    Q = require('q');

var TodoService = {

  loadTodos: function(todos) {
    var defer = Q.defer();

    socket.on('init-data-payload', function(todos) {
      defer.resolve(todos);
    });

    socket.emit('get-init-data');

    return defer.promise;
  }

};

module.exports = TodoService;
