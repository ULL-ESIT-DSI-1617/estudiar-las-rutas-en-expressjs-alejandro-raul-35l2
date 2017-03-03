var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(8080, function() {
    console.log("Servidor escuchando en el puerto: 8080");
});