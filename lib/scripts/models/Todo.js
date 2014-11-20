var mongoose = require('mongoose');

var schema = new mongoose.Schema({ text: 'string' });
var Todo = mongoose.model('Todo', schema);
