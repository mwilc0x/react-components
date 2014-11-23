var constants = require('../constants/constants'),
    socket = require('socket.io-client')('http://localhost:8080');

var actions = {

  loadTodos: function() {
    var _this = this;
    socket.on('init-data-payload', function(todos) {
      _this.dispatch(constants.LOAD_TODOS, todos)
    });

    socket.emit('get-init-data');
  }

};

module.exports = actions;
