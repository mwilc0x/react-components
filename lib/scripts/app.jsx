/** @jsx React.DOM */
"use strict";

var React = require('React');
var Form = require('./components/form.jsx');

var Page = React.createClass({

  getInitialState: function() {
    return {

    }
  },

  render: function(){
    return (
      <Form></Form>
    );
  }

});

React.renderComponent(<Page />, document.getElementById('content'));