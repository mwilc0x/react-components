var constants = require('../constants/constants');

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
    this.dispatch(constants.LOAD_TODOS);
  }

};

module.exports = actions;
