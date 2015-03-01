var express = require('express');

// Constants
var PORT = 80;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world :-) Check out more jump start examples here: blog.hypriot.com');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
