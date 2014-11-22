var constants = require('../constants/constants');

var serverActions = {
  loadTodos: function(todos) {
    this.dispatch(constants.LOAD_TODOS, todos);
  }
};

module.exports = serverActions;
