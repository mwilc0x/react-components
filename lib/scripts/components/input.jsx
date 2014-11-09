/** @jsx React.DOM */

var React = require('react/addons')
var Input = require('react-bootstrap').Input;


var InputComponent = React.createClass({

  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState: function() {
    return {
      value: ''
    };
  },

  validationState: function() {
    var length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  render: function() {
    return (
        <Input
          type="text"
          valueLink={this.linkState('value')}
          placeholder={this.props.placeholder}
          label={this.props.label}
          bsStyle={this.validationState()}
          hasFeedback
          ref="input"
          groupClassName="group-class"
          wrapperClassName="wrapper-class"
          labelClassName="label-class" />
    );
  }
});

module.exports = InputComponent;
