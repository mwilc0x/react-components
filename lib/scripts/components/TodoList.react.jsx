var React = require('react'),
    TodoItem = require('./todo-item.jsx');

var TodoList = React.createClass({

  propTypes: {
    todos: React.PropTypes.array.isRequired
  },

  getDefaultProps: function() {
    return {
      todos: []
    }
  },

  render: function() {

    return (
      <ul>
        {this.props.todos.map(function(todo, i) {
          return (
            <div>
              <li key={i}><TodoItem todo={todo} /></li>
            </div>
          );
        })}
      </ul>
    )
  }

});

module.exports = TodoList;
