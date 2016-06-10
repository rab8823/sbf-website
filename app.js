var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world!');
});

var server = app.listen(80, function() {
  console.log('Server listening on port 3000');
});

