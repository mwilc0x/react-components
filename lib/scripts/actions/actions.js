var constants = require('../constants/constants'),
    service = require('../services/todo-service');

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
    service.loadTodos().then(function(todos){
      _this.dispatch(constants.LOAD_TODOS, todos);
    });

  }

};

module.exports = actions;
