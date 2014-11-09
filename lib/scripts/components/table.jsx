/** @jsx React.DOM */
"use strict";

var React = require('react');
var Table = require('react-bootstrap').Table;

var TableComponent = React.createClass({

  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mike</td>
            <td>Wilcox</td>
            <td>@mjw56</td>
          </tr>
        </tbody>
      </Table>
    );
  }

});

module.exports = TableComponent;
