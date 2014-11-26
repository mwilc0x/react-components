var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  socketio = require('socket.io'),
  Q = require('q'),
  app = express(),
  port = 8080,
  uriString = 'mongodb://localhost/react-components',
  Todo = require('./lib/scripts/models/Todo');

mongoose.connect(uriString, function(err, res) {
  if(err) {
    console.log('error connecting to ' + uriString + '. ' + err);
  } else {
    console.log('success connecting to ' + uriString + '.');
  }
});

app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
  console.log('express server listening on port ' + port);
});

var io = socketio.listen(server);

io.on('connection', function(socket) {

  console.log('new connection initiated');

  socket.on('get-init-data', function() {
    console.log('initiating data from mongo');

    Todo.find({}).exec(function(err, result) {
      if (!err) {

        socket.emit('init-data-payload', result);

      } else {
        // error handling
      };
    });

  });

  socket.on('add-todo', function(todo) {
    console.log('adding todo ' + todo.text +' to the database');

    //TODO: implement
  });

  socket.on('delete-todo', function(todo) {
    console.log('removing todo ' + todo.text + ' from the database.');

    //TODO: implement
  });
})
