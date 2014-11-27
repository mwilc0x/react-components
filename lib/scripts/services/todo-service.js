var socket = require('socket.io-client')('http://localhost:8080'),
    Q = require('q');

var TodoService = {

  addTodo: function(todo) {
    var defer = Q.defer();

    socket.on('todo-added', function() {
      defer.resolve();
    });

    socket.emit('add-todo', todo);

    return defer.promise;
  },

  deleteTodo: function(todo) {
    var defer = Q.defer();

    socket.on('todo-deleted', function() {
      defer.resolve();
    });

    socket.emit('delete-todo', todo);

    return defer.promise;
  },

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
