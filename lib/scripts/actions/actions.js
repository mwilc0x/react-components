var constants = require('../constants/constants'),
    socket = require('socket.io-client')('http://localhost:8080');

var actions = {
  addTodo: function(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },

  toggleTodo: function(todo) {
    this.dispatch(constants.TOGGLE_TODO, {todo: todo});
  },

  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  },

  deleteTodo: function(todo) {
    this.dispatch(constants.DELETE_TODO, {todo: todo})
  },

  loadTodos: function() {
    var _this = this;
    socket.on('init-data-payload', function(todos) {
      _this.dispatch(constants.LOAD_TODOS, todos)
    });

    socket.emit('get-init-data');
  }

};

module.exports = actions;
