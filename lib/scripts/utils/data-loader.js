var Todo = require('../models/Todo'),
    data = require('../../data/todos.json'),
    express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
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

var dataLoader = {
  loadData: function(todos) {
    for(var i = 0; i < todos.length; i++) {
      var todo = new Todo(todos[i]);
      todo.save(function (err) {if (err) console.log ('Error on save!')});
    }

    Todo.find({}).exec(function(err, result) {
      if (!err) {
        console.log('got the data' + result);
      } else {
        // error handling
      };
    });

  }
}

if(process.argv[2] === 'clear') {
  Todo.remove(function(err, p){
      if(err){
          throw err;
      } else{
          console.log('No Of Documents deleted:' + p);
      }
  });
} else {
  dataLoader.loadData(data.todos);
}
