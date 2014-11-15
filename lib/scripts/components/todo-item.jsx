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
        <label className="col-xs-2">
          <span style={style} >{this.props.todo.text}</span>

        </label>
        <label className="col-xs-3">
          <input type="checkbox" value={this.props.todo.text} onClick={this.onClick} />
        </label>
      </div>
    )
  },

  onClick: function() {
    this.getFlux().actions.toggleTodo(this.props.todo);
  }
});

module.exports = TodoItem;
