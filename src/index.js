var express = require('express');
var morgan = require('morgan');

// Constants
var PORT = 80;

// App
var app = express();

// enable access log on STDOUT
// app.use(morgan('combined'));

app.get('/', function (req, res) {
- res.sendFile('/src/index.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
