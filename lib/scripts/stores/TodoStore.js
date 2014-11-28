var Fluxxor = require('fluxxor'),
    constants = require('../constants/constants'),
    Immutable = require('immutable');

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    this.map = Immutable.Map({ 'todos': [] });

    this.bindActions(
      constants.ADD_TODO, this.onAddTodo,
      constants.TOGGLE_TODO, this.onToggleTodo,
      constants.CLEAR_TODOS, this.onClearTodos,
      constants.DELETE_TODO, this.onDeleteTodo,
      constants.LOAD_TODOS, this.onLoadTodos
    );
  },

  onAddTodo: function(payload) {
    var todos = this.map.get('todos');

    todos.push({text: payload.text, complete: false});

    this.map.set('todos', todos);
    this.emit("change");
  },

  onToggleTodo: function(payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit("change");
  },

  onClearTodos: function() {
    var todos = this.todos.filter(function(todo) {
      return !todo.complete;
    });

    this.map.set('todos', todos);

    this.emit("change");
  },

  onDeleteTodo: function(payload) {
    var todos = this.map.get('todos');

    for(var i=0; i < todos.length; i++) {
      if(todos[i].text   === payload.todo.text) {
        break;
      }
    }

    todos.splice(i, 1);

    this.map.set('todos', todos);

    this.emit("change");
  },

  onLoadTodos: function(todos) {

    this.map = this.map.set('todos', todos);

    this.emit("change");
  },

  getState: function() {
    return {
      todos: this.map.get('todos')
    };
  }
});

module.exports = TodoStore;
