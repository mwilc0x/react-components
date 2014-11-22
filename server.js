var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  socketio = require('socket.io'),
  app = express(),
  port = 8080;

mongoose.connect('mongodb://localhost/react-components');

app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = socketio.listen(server);
