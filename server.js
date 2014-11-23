var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  socketio = require('socket.io'),
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

  socket.on('init-data', function() {
    console.log('initiating data from mongo');
  })
})
