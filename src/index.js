var express = require('express');

// Constants
var PORT = 80;

// App
var app = express();
app.get('/', function (req, res) {
  res.sendFile('./index.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
