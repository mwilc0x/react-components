var Fluxxor = require('fluxxor'),
    constants = require('../constants/constants'),
    Immutable = require('immutable');

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    this.map = Immutable.Map({ 'todos': [] });
    this.todoState = { text: '', complete: false };
    this.undoStates = Immutable.List();
    this.redoStates = Immutable.List();
    this.canUndo = false;
    this.canRedo = false;

    this.bindActions(
      constants.ADD_TODO, this.onAddTodo,
      constants.TOGGLE_TODO, this.onToggleTodo,
      constants.CLEAR_TODOS, this.onClearTodos,
      constants.DELETE_TODO, this.onDeleteTodo,
      constants.LOAD_TODOS, this.onLoadTodos,
      constants.UNDO_TODOS, this.onUndoTodos
    );
  },

  onAddTodo: function(payload) {
    var todos = this.map.get('todos');

    todos.push(payload);

    this.map = this.map.set('todos', todos);

    this.undoStates = Immutable.List(this.undoStates.concat({ "list": JSON.stringify(todos), "item": JSON.stringify(payload), "action": "item-added" }));

    this.canUndo = true;

    this.emit("change");
  },

  onToggleTodo: function(payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit("change");
  },

  onClearTodos: function() {
    var todos = this.map.get('todos')

    todos = todos.filter(function(todo) {
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

    this.undoStates = Immutable.List([{ "list": JSON.stringify(todos) }]);

    this.emit("change");
  },

  onUndoTodos: function() {

    this.undoStates = this.undoStates.pop();

    this.map = this.map.set('todos', JSON.parse(this.undoStates.get(this.undoStates.size-1).list));

    if(this.undoStates.size === 1)
      this.canUndo = false;

    this.emit("change");
  },

  getState: function() {
    return {
      todos: this.map.get('todos'),
      canUndo: this.canUndo,
      undoStates: this.undoStates
    };
  }
});

module.exports = TodoStore;
