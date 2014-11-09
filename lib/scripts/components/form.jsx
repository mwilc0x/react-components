/** @jsx React.DOM */
"use strict";

var React = require('React');
var Input = require('./input.jsx');

var Form = React.createClass({

  getInitialState: function() {
    return {

    }
  },

  render: function(){
    return (
      <form>
        <Input label="First Name" placeholder="First name"></Input>
        <Input label="Last Name" placeholder="Last name"></Input>
      </form>
    );
  }
});

module.exports = Form;
