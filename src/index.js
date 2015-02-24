var express = require('express');

// Constants
var PORT = 80;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world :-) \n\n Check out more jumpstart examples here: blog.hypriot.com');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
