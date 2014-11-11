"use strict";

var React = require('react/addons')
var Input = require('react-bootstrap').Input;
var Validations = require('../utils/validations');

var InputTextComponent = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  propTypes: {
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  },

  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
        <Input
          type="text"
          valueLink={this.linkState('value')}
          placeholder={this.props.placeholder}
          label={this.props.label}
          bsStyle={Validations.length(this.state.value)}
          hasFeedback
          ref="input"
          groupClassName="group-class"
          wrapperClassName="wrapper-class"
          labelClassName="label-class" />
    );
  }
});

module.exports = InputTextComponent;
