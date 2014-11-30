var React = require('react'),
    Fluxxor = require('Fluxxor'),
    TodoStore = require('./stores/TodoStore'),
    actions = require('./actions/actions'),
    TodoList = require('./components/TodoList.react.jsx');

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

window.flux = flux;

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

  getInitialState: function() {

    return { newTodoText: "" };
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
    return flux.store("TodoStore").getState();
  },

  componentDidMount: function() {
    this.getFlux().actions.loadTodos();
  },

  render: function() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <form onSubmit={this.onSubmitForm}>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="New Todo"
                       value={this.state.newTodoText}
                       onChange={this.handleTodoTextChange} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">Add Todo</button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <button className="btn btn-success btn-todos" onClick={this.clearCompletedTodos}>Clear Completed</button>
        { this.state.canUndo ?
            <button className="btn btn-info btn-todos" onClick={this.undo}>Undo</button>
          :
            <button className="btn btn-info btn-todos" disabled="true">Undo</button>
        }
      </div>
    );
  },

  handleTodoTextChange: function(e) {
    this.setState({newTodoText: e.target.value});
  },

  onSubmitForm: function(e) {
    e.preventDefault();
    if (this.state.newTodoText.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodoText);
      this.setState({newTodoText: ""});
    }
  },

  clearCompletedTodos: function(e) {
    this.getFlux().actions.clearTodos();
  },

  undo: function() {
    this.getFlux().actions.undoTodos(this.state.undoStates);
  }
});

React.render(<Application flux={flux} />, document.getElementById("content"));
