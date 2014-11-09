/** @jsx React.DOM */
"use strict";

var React = require('React');
var Input = require('./input.jsx');
var Table = require('./table.jsx');

var Form = React.createClass({

  getInitialState: function() {
    return {

    }
  },

  render: function(){
    return (
      <div>
        <form>
          <Input label="First Name" placeholder="First name"></Input>
          <Input label="Last Name" placeholder="Last name"></Input>
        </form>
        <Table></Table>
      </div>
    );
  }
});

module.exports = Form;
