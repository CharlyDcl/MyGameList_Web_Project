var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'views/login.html');
});

app.get('/', function(req, res) {
});

app.post('/login', function(req, res) {
});
