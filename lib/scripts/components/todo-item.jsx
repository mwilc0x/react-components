var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var TodoItem = React.createClass({
  mixins: [FluxMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return (
      <div className="row">
        <span className="col-xs-2" style={style} >{this.props.todo.text}</span>
        <input className="col-xs-1" type="checkbox" value={this.props.todo.text} onClick={this.onClick} />
        <span className="col-xs-1 glyphicon glyphicon-trash" onClick={this._deleteTodo}></span>
      </div>
    )
  },

  onClick: function() {
    this.getFlux().actions.toggleTodo(this.props.todo);
  },

  _deleteTodo: function() {
    this.getFlux().actions.deleteTodo(this.props.todo)
  }
});

module.exports = TodoItem;
