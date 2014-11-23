var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  socketio = require('socket.io'),
  app = express(),
  port = 8080,
  uriString = 'mongodb://localhost/react-components';

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

//loadTodos();
