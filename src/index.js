var express = require('express');
var morgan = require('morgan');

// Constants
var PORT = 80;

// App
var app = express();

// enable access log on STDOUT
// app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container. <a href="http://blog.hypriot.com">blog.hypriot.com</a></body></html>');
  // res.sendFile('/src/index.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
