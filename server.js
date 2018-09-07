var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

var data = fs.readFileSync('users.json')
var user = JSON.parse(data);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/WEB_Project.html');
});

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username ,password);

  for(var i = 0; i < user.length ; i++) {
    if(user[i].name == username && user[i].password == password){
    res.redirect('game');
    }else {
    console.log('connection denied');
    }
  }
});

app.get('/game', function(req, res) {
  res.sendFile(__dirname + '/views/WEB_Project.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
